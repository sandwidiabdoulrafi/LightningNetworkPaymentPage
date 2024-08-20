// const { jsPDF } = window.jspdf;




// document.addEventListener("DOMContentLoaded", function () {
//     // Données à passer à la facture
//     const facture = "Données de la facture";

//     // Génération du reçu sous format PDF
//     function generationPDF(facture){
//         const doc = new jsPDF();
//         doc.text(facture, 10, 10);
//         const docUrl = doc.output('dataurlstring'); // Convertir en Data URL pour affichage
//         return docUrl;
//     }

//     // Générer et afficher le PDF
//     const facturePDF = generationPDF(facture);
//     console.log(facturePDF);

//     const afficher = document.querySelector('.btnShow');
//     const showInvoice = document.querySelector('.showInvoice');
//     const enregistre = document.querySelector('.btnEnreg');

//     // afficher la facture 

//     function getShowInvoice(section){
//         alert('afficher avec succè');
//         section.src = facturePDF;
//     }
//     // afficher.addEventListener('click', getShowInvoice(showInvoice));



//     // sauvegarder le reçu en local
//     function saveIvoceLocal(document){
//         document.save('a4.pdf');
//         alert('sauvegarder avec succè');
//     }
//     // enregistre.addEventListener("click", saveIvoceLocal(facturePDF));














//     // Génération du code QR
//     function generationQRCode(facturePDF){
//         const codeQr = document.querySelector('.codeQr');
//         if (codeQr) {
//             new QRCode(codeQr, {
//                 text: facturePDF,
//                 width: 450,
//                 height: 310
//             });
//         }
//     }

//     const facturePDF2 = 'VOUS AVEZ SCANNÉ AVEC SUCCÈS';
//     var scanQR = generationQRCode(facturePDF2);





// });




const { jsPDF } = window.jspdf;

document.addEventListener("DOMContentLoaded", function () {
    // Données à passer à la facture
    const facture = "Données de la facture";

    // Génération du reçu sous format PDF
    function generationPDF(facture){
        const doc = new jsPDF();
        doc.setFont("helvetica", "bold");
        doc.text(facture, 50, 30);
        const docUrl = doc.output('dataurlstring'); // Convertir en Data URL pour affichage
        return { doc, docUrl };
    }

    // Générer et afficher le PDF
    const { doc, docUrl } = generationPDF(facture);

    const afficher = document.querySelector('.btnShow');
    const showInvoice = document.querySelector('.showInvoice');
    const enregistre = document.querySelector('.btnEnreg');
    alert(docUrl);
    // Fonction pour afficher la facture dans un iframe
    function getShowInvoice() {
        showInvoice.style.display='flex'
        showInvoice.src = docUrl;
        alert('Affiché avec succès');
    }
    afficher.addEventListener('click', getShowInvoice);

    // Fonction pour sauvegarder le reçu en local
    function saveInvoiceLocal() {
        doc.save('a4.pdf');
    }
    enregistre.addEventListener("click", saveInvoiceLocal);

    // Génération du code QR
    function generationQRCode(data){
        const codeQr = document.querySelector('.codeQr');
        if (codeQr) {
            new QRCode(codeQr, {
                text: data,
                width: 450,
                height: 310
            });
        }
    }

    
    // Générer un code QR avec l'URL du PDF
    generationQRCode(docUrl);
});











