import { NextPage } from "next";

import { Text, Section } from "@klimadao/lib/components";
import { Trans, t } from "@lingui/macro";
import * as styles from "./styles";
import { Container } from "../Container";
import { urls } from "@klimadao/lib/constants";

export type Props = HTMLHtmlElement;

export const Disclaimer: NextPage<Props> = ({}) => {
  return (
    <Container
      activePage={"disclaimer"}
      title={t({
        id: "disclaimer.head.title",
        message: "KlimaDAO Disclaimer",
      })}
      headline={t({ id: "disclaimer.disclaimer", message: "Disclaimer" })}
      subline={""}
      metaDescription={t({
        id: "disclaimer.head.description",
        message: "An important disclaimer from the KlimaDAO legal team.",
      })}
      mediaTitle={t({ id: "disclaimer.head.title" })}
      mediaImageSrc={urls.mediaImage}
    >
      <Section variant="gray" style={{ paddingTop: "unset" }}>
        <div className={styles.text}>
          <div className={styles.textGroup}>
            <Text t="body3" color="lighter">
              <Trans
                id="disclaimer.all_information_on_this_website"
                comment="Long sentence"
              >
                All the information on this website is published in good faith
                and for general information purpose only. KlimaDAO is
                distributed on a basis that it will be useful and serve only
                within grounds and limits described on above mentioned website.
              </Trans>
            </Text>
            <Text t="body3" color="lighter">
              <Trans
                id="disclaimer.klimadao_is_a_platform"
                comment="Long sentence"
              >
                KlimaDAO is a platform. We are not a broker, financial
                institution, or creditor. Services provided on this website do
                not include an offer to hold or control your securities,
                options, assets, futures or other derivatives related to
                securities in any jurisdiction and its content is not prescribed
                by securities laws.
              </Trans>
            </Text>
            <Text t="body3" color="lighter">
              <Trans
                id="disclaimer.nothing_in_this_platform"
                comment="Long sentence"
              >
                Nothing in this platform constitutes or be construed as:
              </Trans>
            </Text>
            <Text t="body3" color="lighter">
              <Trans
                id="disclaimer.1_an_offer_or_sollicitation"
                comment="Long sentence"
              >
                1. An offer, or solicitation of an offer to hold or control any
                security, other asset or service, which are connected with
                intangible benefits;
              </Trans>
            </Text>
            <Text t="body3" color="lighter">
              <Trans
                id="disclaimer.2_financial_investment_or_trading_advice"
                comment="Long sentence"
              >
                2. Financial, investment or trading advice or an offer to
                provide such advice and/or service.
              </Trans>
            </Text>
            <Text t="body3" color="lighter">
              <Trans
                id="disclaimer.the_service_available"
                comment="Long sentence"
              >
                The service available in or accessible through the service are
                provided “As is” and, to the fullest extent permissible pursuant
                to applicable law. KlimaDAO and its agents, advisors, directors,
                officers, employees and shareholders disclaim all warranties,
                express or implied, including, but not limited to, implied
                warranties of merchantability, fitness for a particular purpose
                and non-infrigement, and warranties implied from a course of
                performance or course of dealing. KlimaDAO does not make any
                warranties about the completeness, reliability and accuracy of
                this information, warranty of merchantability or fitness for a
                particular purpose. This platform does not make any warranties
                about the completeness and accuracy of this information.
              </Trans>
            </Text>
            <Text t="body3" color="lighter">
              <Trans
                id="disclaimer.klimadao_and_its_suppliers"
                comment="Long sentence"
              >
                KlimaDAO and its suppliers make no warranty that the platform
                will:
              </Trans>
            </Text>
            <Text t="body3" color="lighter">
              <Trans id="disclaimer.1_meet_your_requirements">
                1. Meet your requirements;
              </Trans>
            </Text>
            <Text t="body3" color="lighter">
              <Trans
                id="disclaimer.2_be_available_on_an_uninterrupted"
                comment="Long sentence"
              >
                2. Be available on an uninterrupted, timely, secure, or
                error-free basis;
              </Trans>
            </Text>
            <Text t="body3" color="lighter">
              <Trans id="disclaimer.3_be_reliable_complete_legal_or_safe">
                3. Be reliable, complete, legal or safe.
              </Trans>
            </Text>
            <Text t="body3" color="lighter">
              <Trans
                id="disclaimer.neither_klimadao_nor_any_of_its_representatives"
                comment="Long sentence"
              >
                Neither KlimaDAO nor any of its representatives will not liable
                for any loss of any kind from any action taken or taken in
                reliance on material or information, contained on the service.
                KlimaDAO is making the use of the service and content safe,
                nevertheless it does not represent or warrant that the service
                and content on our platform are free of viruses or other harmful
                components.
              </Trans>
            </Text>
            <Text t="body3" color="lighter">
              <Trans
                id="disclaimer.you_bear_full_responsibility"
                comment="Long sentence"
              >
                You bear full responsibility for providing of private
                information, verifying the identity and legitimacy.
                Notwithstanding indicators and messages that suggest providing
                the private information and verification, KlimaDAO makes no
                claims about the identity on the platform. We cannot guarantee
                the security of any data that disclose online, and for sustained
                casualties due to vulnerability or any kind of failure, abnormal
                behavior of software.
              </Trans>
            </Text>
            <Text t="body3">
              <Trans
                id="disclaimer.any_action_you_take_upon_the_information"
                comment="Long sentence"
              >
                Any action you take upon the information you find on this
                website is strictly at your own risk. Decisions based on
                information contained on this website are the sole
                responsibility of the visitor. KlimaDAO will not be liable for
                any losses and/or damages in connection with the use of the
                website, the loss of your password/seed phrase, a bad trade,
                sending an asset to the wrong address, losing your asset and
                events related to damage caused by scammers. KlimaDAO cannot
                assume any responsibility or liability connected with market
                changing and its volatility. You must conduct your own research
                and satisfy yourself of your own situation, familiarity and
                knowledge of information or service provided by this platform.
              </Trans>
            </Text>
            <Text t="body3" color="lighter">
              <Trans
                id="disclaimer.nothing_in_this_disclaimer"
                comment="Long sentence"
              >
                Nothing in this disclaimer, any information content or material
                shall or shall be constructed to create any legal relations
                between us and you nor grant any rights or obligations to either
                of us.
              </Trans>
            </Text>
            <Text t="body3" color="lighter">
              <Trans
                id="disclaimer.we_recommend_that_you_visit"
                comment="Long sentence"
              >
                We recommend that you visit our Crypto Security 101 page for
                safety instructions before the use of the website. Please, take
                into consideration: never share your private key or seed phrase
                with anyone – neither our members nor our app will ever ask for
                or request this from you.
              </Trans>
            </Text>
          </div>
        </div>
      </Section>
    </Container>
  );
};
