<template>
 <div>{{DocumentPersonBrFilter}}</div>

</template>

<script>
const DocumentPersonBrFilter = {
    install(Vue, options) {
      Vue.filter('DocumentPersonBr', (documentId, documentType) => {
        documentId = typeof documentId != 'string' ? documentId.toString() : documentId;
        if (documentType == 'J') {
          documentId = documentId.padStart(14, '0');
          documentId = documentId.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
        } else {
          documentId = documentId.padStart(11, '0');
          documentId = documentId.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
        }
        return documentId;
      });
    },
  };
  Vue.use(DocumentPersonBrFilter);
export default {
  name: 'cpfcnpj'
  
}
</script>
