import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'
import {
  FiCircle,
  FiFileText,
  FiLayout,
  FiSettings,
  FiSidebar,
  FiSquare,
  FiHome,
} from 'react-icons/fi'

export const structure = (S, context) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('General')
        .icon(FiSettings)
        .child(S.editor().schemaType('general').documentId('general')),
      S.divider(),
      S.listItem()
        .title('Homepage')
        .icon(FiHome)
        .child(S.editor().schemaType('homepage').documentId('homepage')),
      S.listItem()
        .title('Work')
        .icon(FiCircle)
        .child(
          S.list()
            .title('Work')
            .items([
              S.listItem()
                .title('Projects Overview')
                .icon(FiSidebar)
                .child(S.editor().schemaType('projectsOverview').documentId('projectsOverview')),
              orderableDocumentListDeskItem({
                type: 'project',
                title: 'Projects',
                icon: FiSquare,
                S,
                context,
              }),
            ])
        ),
      S.listItem().title('Pages').icon(FiSidebar).child(S.documentTypeList('page').title('Pages')),
      S.listItem()
        .title('Legal')
        .icon(FiFileText)
        .child(S.editor().schemaType('legal').documentId('legal')),
    ])
