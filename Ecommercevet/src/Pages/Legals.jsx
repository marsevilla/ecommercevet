import React from 'react';
import '../Styles/page/Legals.scss';
import BannerLegals from "../assets/legals.png";


function Legals() {
  return <>
    <img className="legals-banner" src={BannerLegals} alt="Rayon de livres" />

    <div className="legals-container">
      <h1>Mentions légales</h1>
      <h2>Nom de l'entreprise :</h2>
      <p>Coeur de Soie</p>
      
      <h2>Adresse du siège social :</h2>
      <p>[Adresse du siège social à compléter]</p>
      
      <h2>Forme juridique :</h2>
      <p>[Forme juridique à compléter, par exemple SARL, SAS, etc.]</p>
      
      <h2>Numéro d'identification :</h2>
      <p>[Numéro SIRET / RCS à compléter]</p>
      
      <h2>Directeur de la publication :</h2>
      <p>[Nom du directeur de la publication à compléter]</p>
      
      <h2>Hébergeur du site :</h2>
      <p>Nom : [Nom de l'hébergeur à compléter]</p>
      <p>Adresse : [Adresse de l'hébergeur à compléter]</p>
      <p>Téléphone : [Téléphone de l'hébergeur à compléter]</p>
      
      <h2>Contact :</h2>
      <p>Email : [Adresse email de contact à compléter]</p>
      <p>Téléphone : [Numéro de téléphone de contact à compléter]</p>
      
      <h2>Propriété intellectuelle :</h2>
      <p>
        Le site internet ainsi que l'ensemble des droits y afférents sont la propriété exclusive de Coeur de Soie.
        Toute reproduction, intégrale ou partielle, du site est systématiquement soumise à l'autorisation des propriétaires.
        Cependant, les liaisons du type hypertextes vers le site sont autorisées sans demandes spécifiques.
      </p>
      
      <h2>Responsabilité :</h2>
      <p>
        L'entreprise Coeur de Soie ne pourra être tenue responsable des dommages directs et indirects causés au matériel de l'utilisateur,
        lors de l'accès au site internet Coeur de Soie, et résultant soit de l'utilisation d'un matériel ne répondant pas aux spécifications
        indiquées au point 4, soit de l'apparition d'un bug ou d'une incompatibilité.
      </p>
      
      <h2>Données personnelles :</h2>
      <p>
        Les informations recueillies font l’objet d’un traitement informatique destiné à améliorer nos services et à gérer la relation client.
        Conformément à la loi « informatique et libertés », vous pouvez exercer votre droit d'accès aux données vous concernant et les faire rectifier
        en contactant : [Nom et adresse de contact à compléter].
      </p>
      
      <h2>Cookies :</h2>
      <p>
        La navigation sur le site Coeur de Soie est susceptible de provoquer l’installation de cookie(s) sur l’ordinateur de l’utilisateur.
        Un cookie est un fichier de petite taille, qui ne permet pas l’identification de l’utilisateur, mais qui enregistre des informations relatives
        à la navigation d’un ordinateur sur un site. Les données ainsi obtenues visent à faciliter la navigation ultérieure sur le site, et ont également
        vocation à permettre diverses mesures de fréquentation.
      </p>
    </div>
    </>
};

export default Legals;
