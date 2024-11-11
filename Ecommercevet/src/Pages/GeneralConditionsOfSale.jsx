import React from 'react';
import '../Styles/page/GeneralConditionsOfSale.scss';
import BannerCGV from "../assets/payment.png";


function GeneralConditionsOfSale() {
  return <>
    <img className="cgv-banner" src={BannerCGV} alt="Photo d'une personne réglant une commande internet" />

    <div className="cgv-container">
        <h1>Conditions générales de vente</h1>

        <p>Les présentes Conditions Générales de Vente (CGV) régissent la vente de produits sur le site internet Coeur de Soie. En passant commande sur ce site, vous acceptez sans réserve les présentes CGV.</p>

        <h2>Produits</h2>

        <p>
        Coeur de Soie propose des vêtements et accessoires pour femmes. Les produits sont présentés sur le site avec des photos, des descriptions et les prix en vigueur.
        Toutefois, les produits peuvent varier légèrement par rapport à l'image ou à la description sur le site en raison de la nature des vêtements.
        </p>

        <h2>Prix</h2>
      
        <p>
        Les prix des produits sont indiqués en euros (€) et incluent toutes les taxes applicables. Les frais de livraison sont calculés séparément et sont indiqués avant la validation finale de la commande.
        Coeur de Soie se réserve le droit de modifier ses prix à tout moment, mais les produits seront facturés sur la base des tarifs en vigueur au moment de l'enregistrement de la commande.
        </p>

        <h2>Commande</h2>
        <p>
            Le client peut passer commande directement sur le site internet en suivant le processus de commande. Une fois la commande validée et payée, un e-mail de confirmation sera envoyé au client pour récapituler les détails de la commande.
        </p>

        <h2>Paiement</h2>
        <p>
            Le paiement des produits s’effectue uniquement par carte bancaire (Visa, MasterCard, etc.). La transaction est sécurisée via un système de paiement en ligne. Le montant total de la commande sera débité immédiatement après validation de la commande.
        </p>

        <h2>Livraison</h2>
        <p>
            Les produits commandés seront expédiés dans un délai maximum de 12 jours ouvrés à compter de la confirmation de la commande. Les frais de livraison seront calculés en fonction de la destination et indiqués avant la validation finale de la commande.
            La livraison s’effectue à l’adresse indiquée par le client lors de la commande. En cas d’absence du client lors de la livraison, le colis sera retourné au centre de distribution ou à un point relais selon les options proposées par le transporteur.
        </p>

        <h2>Droit de rétractation</h2>
        <p>
            Conformément à la législation en vigueur, le client bénéficie d'un droit de rétractation de 14 jours à compter de la réception des produits pour retourner la commande et obtenir un remboursement. Les produits doivent être retournés dans leur état d'origine, non portés et avec leurs étiquettes intactes.
            Le client doit informer Coeur de Soie de son intention de se rétracter via un formulaire de rétractation ou un e-mail. Les frais de retour sont à la charge du client, sauf en cas de produit défectueux.
        </p>

        <h2>Échange et remboursement</h2>
        <p>
            Les produits peuvent être échangés ou remboursés dans les 14 jours suivant leur réception, sous réserve qu'ils soient retournés dans leur état d'origine et dans leur emballage d'origine. En cas de remboursement, celui-ci sera effectué dans un délai de 14 jours suivant la réception des produits retournés.
        </p>

        <h2>Garantie des produits</h2>
        <p>
            Tous les produits vendus sur le site Coeur de Soie bénéficient de la garantie légale de conformité de 2 ans, conformément aux dispositions du Code de la consommation. En cas de produit défectueux ou non conforme, le client peut demander un échange ou un remboursement.
        </p>

        <h2>Responsabilité</h2>
        <p>
            Coeur de Soie met tout en œuvre pour garantir la disponibilité de ses produits et la sécurité des transactions en ligne. Cependant, la responsabilité de l'entreprise ne saurait être engagée en cas d’indisponibilité du site, de perturbations dans la chaîne de paiement en ligne ou de retard dans la livraison en raison de causes indépendantes de sa volonté.
        </p>

        <h2>Propriété intellectuelle</h2>
        <p>
            Tous les éléments du site Coeur de Soie (textes, images, logos, etc.) sont protégés par les droits de propriété intellectuelle et sont la propriété exclusive de l'entreprise. Toute reproduction, même partielle, est interdite sans l'autorisation expresse de Coeur de Soie.
        </p>

        <h2>Protection des données personnelles</h2>
        <p>
            Conformément à la législation sur la protection des données personnelles, Coeur de Soie collecte et traite les données personnelles de ses clients uniquement pour la gestion des commandes et le suivi client. Ces données ne seront en aucun cas revendues à des tiers. Le client dispose d'un droit d'accès, de modification, de rectification et de suppression de ses données personnelles en contactant le service client.
        </p>

        <h2>Modifications des CGV</h2>
        <p>
            Coeur de Soie se réserve le droit de modifier les présentes Conditions Générales de Vente à tout moment. Les modifications seront applicables à compter de leur publication sur le site internet. Il est conseillé de consulter régulièrement les CGV pour prendre connaissance des éventuelles mises à jour.
        </p>

        <h2>Droit applicable et juridiction compétente</h2>
        <p>
            Les présentes CGV sont régies par le droit français. En cas de litige, les parties s’efforceront de trouver une solution amiable. Si aucune solution amiable n’est trouvée, le litige sera soumis à la juridiction compétente du ressort du tribunal de commerce.
        </p>
    </div>
  </>
}

export default GeneralConditionsOfSale