import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { BiHouseUpFillIcon } from './BiHouseUpFillIcon.js';
import classes from './Desktop1.module.css';
import { EmojioneMonotoneFamilyManWoman } from './EmojioneMonotoneFamilyManWoman.js';
import { EpInfoFilledIcon } from './EpInfoFilledIcon.js';
import { FluentEarthLeaf24FilledIcon } from './FluentEarthLeaf24FilledIcon.js';
import { IconParkAlarmIcon } from './IconParkAlarmIcon.js';
import { VaadinToolsIcon } from './VaadinToolsIcon.js';
import { VectorIcon2 } from './VectorIcon2.js';
import { VectorIcon3 } from './VectorIcon3.js';
import { VectorIcon4 } from './VectorIcon4.js';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 203:370 */
export const Desktop1: FC<Props> = memo(function Desktop1(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.jEntretiensMaChaudiereTousLesA}>J’entretiens ma chaudière tous les ans :</div>
      <div className={classes.containerBloc}>
        <div className={classes.container}></div>
        <div className={classes.rectangle6}></div>
        <div className={classes.jECREEMONALERTE}>JE CREE MON ALERTE</div>
        <div className={classes.iconParkAlarm}>
          <IconParkAlarmIcon className={classes.icon} />
        </div>
        <div className={classes.phCalendarLight}></div>
        <div className={classes.rectangle5}></div>
        <div className={classes.qUANDFAIREENTRETENIRMACHAUDIER}>QUAND FAIRE ENTRETENIR MA CHAUDIERE ?</div>
        <div className={classes.vector}>
          <VectorIcon className={classes.icon2} />
        </div>
        <div className={classes.rectangle11}></div>
        <div className={classes.vaadinTools}>
          <VaadinToolsIcon className={classes.icon3} />
        </div>
        <div className={classes.nosSpecialistesVousAide}>
          <div className={classes.textBlock}>Nos spécialistes vous</div>
          <div className={classes.textBlock2}>
            <p></p>
          </div>
          <div className={classes.textBlock3}>aide</div>
        </div>
        <div className={classes.rectangle7}></div>
        <div className={classes.jEPROTEGEMAFAMILLE}>
          <div className={classes.textBlock4}>JE PROTEGE </div>
          <div className={classes.textBlock5}>MA FAMILLE !</div>
        </div>
        <div className={classes.emojioneMonotoneFamilyManWoman}>
          <EmojioneMonotoneFamilyManWoman className={classes.icon4} />
        </div>
        <div className={classes.rectangle4}></div>
        <div className={classes.qUELQUESCONSEILSPRATIQUES}>QUELQUES CONSEILS PRATIQUES</div>
        <div className={classes.epInfoFilled}>
          <EpInfoFilledIcon className={classes.icon5} />
        </div>
        <div className={classes.rectangle3}></div>
        <div className={classes.jEFAISDESECONOMIES}>JE FAIS DES ECONOMIES</div>
        <div className={classes.clarityPiggyBankLine}>
          <div className={classes.vector2}>
            <VectorIcon2 className={classes.icon6} />
          </div>
          <div className={classes.vector3}>
            <VectorIcon3 className={classes.icon7} />
          </div>
          <div className={classes.vector4}>
            <VectorIcon4 className={classes.icon8} />
          </div>
          <div className={classes.unnamed}>€</div>
        </div>
        <div className={classes.rectangle42}></div>
        <div className={classes.jEGAGNEENCONFORTDEVIE}>JE GAGNE EN CONFORT DE VIE</div>
        <div className={classes.biHouseUpFill}>
          <BiHouseUpFillIcon className={classes.icon9} />
        </div>
        <div className={classes.rectangle43}></div>
        <div className={classes.jAMELIOREMACONSOMMATIONENERGET}>J’AMELIORE MA CONSOMMATION ENERGETIQUE</div>
        <div className={classes.fluentEarthLeaf24Filled}>
          <FluentEarthLeaf24FilledIcon className={classes.icon10} />
        </div>
      </div>
      <div className={classes.pourquoiNousChoisir}>Pourquoi nous choisir :</div>
      <div className={classes.pourquoiNousChoisir2}>
        <div className={classes.nosChauffagistesSontQualifiesE}>
          Nos chauffagistes sont qualifiés et ont suivi une formation professionnelle et possèdent les compétences
          nécessaires pour effectuer divers travaux.
        </div>
        <div className={classes.fiabiliteEtProfessionnalismeNo}>
          <div className={classes.textBlock6}>
            Fiabilité et professionnalisme : Nos professionnels sont fiables et respectueux des délais convenus.
          </div>
          <div className={classes.textBlock7}>
            Ils seront également équipés des outils appropriés pour effectuer les travaux de manière efficace.
          </div>
          <div className={classes.textBlock8}>
            <p></p>
          </div>
          <div className={classes.textBlock9}>
            {' '}
            De plus, un chauffagiste professionnel aura une approche respectueuse envers vous et votre domicile,
          </div>
          <div className={classes.textBlock10}>
            {' '}
            en veillant à maintenir la propreté et l&#39;ordre pendant les travaux.
          </div>
        </div>
        <div className={classes.nousAvonsUneConnaissanceApprof}>
          <div className={classes.textBlock11}>
            Nous avons une connaissance approfondie des systèmes thermiques, des normes de sécurité et des
            réglementations en vigueur.
          </div>
          <div className={classes.textBlock12}>
            Notre expérience pratique nous permet de résoudre efficacement les problèmes et de faire face à des
            situations imprévues.
          </div>
        </div>
        <div className={classes.assuranceEtLicenceLorsqueVousE}>
          Assurance et licence : Lorsque vous engagez un chauffagiste professionnel, vous avez l&#39;assurance qu&#39;il
          est couvert par une assurance responsabilité civile. Cela vous protège en cas de dommages matériels ou de
          blessures qui pourraient survenir pendant les travaux. De plus, un chauffagiste agréé détient les licences et
          les qualifications nécessaires pour exercer son métier conformément aux réglementations locales.
        </div>
        <div className={classes.conseilsDExpertsNosChauffagist}>
          <div className={classes.textBlock13}>
            Conseils d&#39;experts : Nos chauffagistes qualifiés peuvent fournir des conseils d&#39;experts sur les
            meilleures solutions pour vos besoins en chauffage.
          </div>
          <div className={classes.textBlock14}>
            Ils peuvent vous guider dans le choix des équipements, des matériaux et des solutions les plus adaptés à
            votre situation. Leurs connaissances spécialisées peuvent vous aider à prendre des décisions éclairées et à
            optimiser l&#39;efficacité de vos installations.
          </div>
        </div>
        <div className={classes.serviceApresVenteNosChauffagis}>
          <div className={classes.textBlock15}>
            Service après-vente : Nos chauffagistes professionnels offrent un service après-vente pour s&#39;assurer que
            les travaux sont bien réalisés et répondent à vos attentes.
          </div>
          <div className={classes.textBlock16}>
            <p></p>
          </div>
          <div className={classes.textBlock17}>
            Appelez nous en cas de problème ultérieur ou de besoin d&#39;entretien, vous pouvez compter sur notre
            expertise pour vous aider à résoudre les problèmes rapidement et efficacement.
          </div>
        </div>
        <div className={classes.respectDesNormesEtDesReglement}>
          Respect des normes et des réglementations : Nos spécialistes sont familiarisés avec les normes et les
          réglementations en matière de chauffage. Ils s&#39;assurent que les travaux réalisés respectent ces normes, ce
          qui garantit la sécurité et la conformité de votre installation thermique.
        </div>
      </div>
    </div>
  );
});
