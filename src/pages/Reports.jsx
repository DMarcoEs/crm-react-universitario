import CRMLayout from "../layouts/CRMLayout";
import Card from "../components/Card";

function Reports() {
  return (
    <CRMLayout>
      <h2 className="text-2xl font-bold mb-6">
        Reportes
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card title="Leads por mes">
          Resumen mensual de prospectos
        </Card>

        <Card title="Conversión">
          Porcentaje de leads convertidos
        </Card>

        <Card title="Desempeño por asesor">
          Comparativa de resultados
        </Card>
      </div>
    </CRMLayout>
  );
}

export default Reports;
