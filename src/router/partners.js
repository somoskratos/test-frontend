import Partners from "@/views/partners/Partners.vue";
import PartnersList from "@/views/partners/List.vue";
import PartnersView from "@/views/partners/View.vue";
import PartnersDocumentsView from "@/views/partners/DocumentsView.vue";

export default {
  path: "empresas",
  component: Partners,
  children: [
    {
      path: "",
      redirect: "lista"
    },
    {
      path: "lista",
      name: "empresas.lista",
      component: PartnersList
    },
    {
      path: ":id",
      name: "empresas.view",
      component: PartnersView
    },
    {
      path: ":partnerId/documentos/:documentId",
      name: "empresas.documentos.view",
      component: PartnersDocumentsView
    }
  ]
};
