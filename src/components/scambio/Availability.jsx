import ReflectiveBlock from "@/components/scambio/ReflectiveBlock";

export default function Availability() {
  return (
    <ReflectiveBlock
      id="disponibilidade"
      tag="Disponibilidade"
      title="A plataforma acompanha a equipe onde ela estiver"
      paragraphs={[
        "A SCAMBIO.IA estará disponível para diferentes dispositivos — celular, tablet e computador.",
        "Cada dispositivo se ajusta ao momento do trabalho: o analista de campo registra e consulta no território; a coordenação acompanha, analisa e decide a partir do escritório.",
        "A visão de cada perfil é adaptada à sua função — com o que cada um precisa ver e fazer.",
      ]}
      note="O campo registra. A coordenação compreende. O território permanece conectado."
    />
  );
}