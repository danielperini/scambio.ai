import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Trash2, ArrowLeft } from "lucide-react";
import { base44 } from "@/api/base44Client";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";

export default function Account() {
  const navigate = useNavigate();
  const [me, setMe] = useState(null);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState(null);

  useEffect(() => {
    base44.auth.me().then(setMe).catch(() => setMe(null));
  }, []);

  const handleDelete = async () => {
    setBusy(true);
    setErr(null);
    try {
      if (me?.id) await base44.entities.User.delete(me.id);
      await base44.auth.logout();
    } catch (e) {
      setErr(e?.message || "Não foi possível excluir a conta. Tente novamente.");
      setBusy(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground safe-top">
      <div className="max-w-xl mx-auto px-6 lg:px-10 py-10">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 min-h-[44px] px-2 mb-8 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar
        </button>

        <h1 className="font-heading font-black text-3xl lg:text-4xl tracking-tight">
          Conta
        </h1>
        <p className="mt-3 text-muted-foreground">
          Gerencie seus dados e acesso à SCAMBIO.IA.
        </p>

        <div className="mt-8 glass rounded-2xl p-6">
          <p className="text-sm text-muted-foreground">E-mail</p>
          <p className="mt-1 text-lg font-medium">{me?.email || "—"}</p>
        </div>

        <div className="mt-8 border-t border-border/60 pt-8">
          <h2 className="font-heading font-bold text-xl text-destructive">
            Excluir conta
          </h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            A exclusão da conta é permanente. Todos os dados associados ao seu
            usuário serão removidos e você será desconectado imediatamente.
            Esta ação não pode ser desfeita.
          </p>

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <button
                type="button"
                disabled={busy}
                className="mt-5 inline-flex items-center justify-center gap-2 min-h-[44px] px-5 rounded-xl bg-destructive text-destructive-foreground font-semibold hover:bg-destructive/90 transition-colors disabled:opacity-60"
              >
                <Trash2 className="w-5 h-5" />
                {busy ? "Excluindo…" : "Excluir conta"}
              </button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Excluir sua conta?</AlertDialogTitle>
                <AlertDialogDescription>
                  Esta ação remove permanentemente seus dados da SCAMBIO.IA e
                  encerra sua sessão. A exclusão não pode ser desfeita. Tem
                  certeza de que deseja continuar?
                </AlertDialogDescription>
              </AlertDialogHeader>
              {err && <p className="text-sm text-destructive">{err}</p>}
              <AlertDialogFooter>
                <AlertDialogCancel disabled={busy}>Cancelar</AlertDialogCancel>
                <AlertDialogAction
                  onClick={(e) => {
                    e.preventDefault();
                    handleDelete();
                  }}
                  disabled={busy}
                  className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                >
                  Sim, excluir
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </div>
  );
}