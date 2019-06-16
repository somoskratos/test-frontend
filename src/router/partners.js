import Partners from "@/views/partners/Partners.vue";
import PartnersList from "@/views/partners/List.vue";
import PartnersView from "@/views/partners/View.vue";
import PartnersDocuments from "@/views/partners/Documents.vue";
import PartnersDocumentsView from "@/views/partners/DocumentsView.vue";

export default {
  path: "empresas",
  component: Partners,
  children: [
    {
      path: "",
      redirect: "lists"
    },
    {
      path: "lista",
      name: "partners.list",
      component: PartnersList
    },
    {
      path: ":id",
      name: "partners.view",
      component: PartnersView
    },
    {
      path: ":id/documentos",
      name: "partners.documents",
      component: PartnersDocuments
    },
    {
      path: ":id/documentos/:id",
      name: "partners.documents.view",
      component: PartnersDocumentsView
    }
  ]
};
