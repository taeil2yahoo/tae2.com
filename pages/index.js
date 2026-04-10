import Head from "next/head";
import styles from "./index.module.css";
// import styles from "./no-images.module.scss";

import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

import Image from "next/image";

export default function Home() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  return (
    <div>
      <Head>
        <title>
          How to Send the Money
        </title>
        <meta
          name="description"
          content="How to Send the Money"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet" />
      </Head>
      <main className={styles.main}>
        <h1>How to Send the Money</h1>
        <div className={styles.row}>
          <div className={`${styles.col}`}>
            <div className={styles.section}>
              <h2>Send through Venmo or Cash App</h2>
              <div className={styles.paymentApps}>
                <div className={`${styles.venmo} ${styles.paymentApp}`}>
                  <div className={styles.bankLogo}>
                    <Image
                      alt="Venmo"
                      src="/payment/venmo-logo.svg"
                      width={194.47}
                      height={35.72}
                      className={styles.venmoLogo}
                    />
                  </div>
                  <div className={`${styles.venmoQR}`}>
                    <Image
                      alt="Venmo QR"
                      src="/payment/venmo-qr.png"
                      width={171}
                      height={170}
                    />
                  </div>
                  <p>
                    <a
                      href="https://account.venmo.com/u/taeil2"
                      target="_blank"
                      rel="noreferrer"
                    >
                      @taeil2
                    </a>
                  </p>
                  {/* <h3>Account Number</h3>
                  <h4>2221<span className={styles.spacer} />8586<span className={styles.spacer} />0055</h4>
                  <h3>Routing Number</h3>
                  <h4>031<span className={styles.spacer} />101<span className={styles.spacer} />279</h4>
                  <h3>Swift / BIC Code</h3>
                  <h4>BNTAUS32XXX</h4> */}
                </div>
                <div className={`${styles.cashApp} ${styles.paymentApp}`}>
                  <div className={styles.bankLogo}>
                    <Image
                      alt="Cashapp"
                      src="/payment/cashapp-logo.svg"
                      width={866.6}
                      height={204.7}
                      className={styles.cashAppLogo}
                    />
                  </div>
                  <div className={styles.cashAppQR}>
                    <Image
                      alt="Cash App QR"
                      src="/payment/cashapp-qr.png"
                      width={288}
                      height={288}
                    />
                  </div>
                  <p>
                    <a
                      href="https://cash.app/$taeilkwak"
                      target="_blank"
                      rel="noreferrer"
                    >
                      $taeilkwak
                    </a>
                  </p>
                  {/* <h5>Account Number</h5>
                  <h6>
                    129
                    <span className={styles.spacer} />
                    389
                    <span className={styles.spacer} />
                    102
                    <span className={styles.spacer} />
                    7716
                  </h6>
                  <h5>Routing Number</h5>
                  <h6>
                    041
                    <span className={styles.spacer} />
                    215
                    <span className={styles.spacer} />
                    663
                  </h6> */}
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.col} ${styles.wide}`}>
            <div className={styles.section}>
              <h2>Send a Wire Transfer</h2>
              <div className={styles.buseyBank}>
                {/* <div
                  // className={`${styles.bankLogo} ${styles.buseyBankLogo}`}
                  className={styles.bankLogo}
                >
                  <Image
                    alt="Busey Bank"
                    src="/payment/buseybank-logo.svg"
                    width={169}
                    height={57}
                    className={styles.buseyBankLogo}
                  />
                </div> */}
                <h3>International Transfer</h3>
                <p>
                  <strong>Recipient Name:</strong> Taeil Kwak<br />
                  <strong>Recipient Address:</strong> 2727 Hawthorn Lane,Wilmette, IL 60091<br />
                  <br />
                  <strong>IBAN Number:</strong> ???<br />
                  <strong>SWIFT/BIC Code:</strong> BUYEUS44<br />
                  <br />
                  <strong>Bank Name:</strong> Busey Bank<br />
                  <strong>Bank Address:</strong> 100 W University Ave, Champaign, IL 61820
                </p>
                <h3>US Transfer</h3>
                <p>
                  <strong>Recipient Name:</strong> Taeil Kwak<br />
                  <strong>Recipient Address:</strong> 2727 Hawthorn Lane, Wilmette, IL 60091<br />
                  <br />
                  <strong>Account Number:</strong> 2305<span className={styles.spacer} />8777<span className={styles.spacer} />7034<br />
                  <strong>Routing Number:</strong> 071<span className={styles.spacer} />102<span className={styles.spacer} />568<br />
                  <br />
                  <strong>Bank Name:</strong> Busey Bank<br />
                  <strong>Bank Address:</strong> 100 W University Ave, Champaign, IL 61820
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.col}>
            <div className={styles.section}>
              <h2>Send a new account with money in it</h2>
              <ul>
                <li>
                  Create a new account at any bank or app that holds money.
                  <br />
                  Some examples include:
                  <ul>
                    <li>
                      <a
                        href="https://www.chase.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Chase Bank
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.hsbc.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        HSBC
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.abchina.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Agricultural Bank of China
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.rbc.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Royal Bank of Canada
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://mabanque.bnpparibas/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        BNP Paribas
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.dbs.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        DBS Bank
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://venmo.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Venmo
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://cash.app/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Cash App
                      </a>
                    </li>
                  </ul>
                </li>
                <li>Transfer your money into this account.</li>
                <li>
                  Email Taeil at{" "}
                  <a className={styles.a}>
                    <CopyToClipboard
                      text="taeil2@gmail.com"
                      onCopy={() => {
                        setShowTooltip(true);
                        setTimeout(() => {
                          setFadeOut(true);
                        }, 4000);
                        setTimeout(() => {
                          setShowTooltip(false);
                          setFadeOut(false);
                        }, 5000);
                      }}
                    >
                      <span>taeil2@gmail.com</span>
                    </CopyToClipboard>{" "}
                    <span
                      className={`${styles.tooltip} ${
                        showTooltip && styles.showTooltip
                      } ${fadeOut && styles.fadeOut}`}
                    >
                      {/* <span> */}
                      copied taeil2@gmail.com to clipboard
                      {/* </span> */}
                    </span>
                  </a>
                  with the following:
                  <ul>
                    <li>The bank or app name</li>
                    <li>The bank or app website</li>
                    <li>Your login</li>
                    <li>Your password</li>
                    <li>
                      Any other required information to access this account
                    </li>
                  </ul>
                </li>
              </ul>
              <p className={styles.faint}>
                Note: This account is not yours after sending this information.
              </p>
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.section}>
              <h2>Send an existing account with money in it</h2>
              <p>
                  Email Taeil at{" "}
                  <a className={styles.a}>
                    <CopyToClipboard
                      text="taeil2@gmail.com"
                      onCopy={() => {
                        setShowTooltip(true);
                        setTimeout(() => {
                          setFadeOut(true);
                        }, 4000);
                        setTimeout(() => {
                          setShowTooltip(false);
                          setFadeOut(false);
                        }, 5000);
                      }}
                    >
                      <span>taeil2@gmail.com</span>
                    </CopyToClipboard>{" "}
                    <span
                      className={`${styles.tooltip} ${
                        showTooltip && styles.showTooltip
                      } ${fadeOut && styles.fadeOut}`}
                    >
                      {/* <span> */}
                      copied taeil2@gmail.com to clipboard
                      {/* </span> */}
                    </span>
                  </a>
                  with the following:
                </p>
                <ul>
                    <ul>
                      <li>The bank or app name</li>
                      <li>The bank or app website</li>
                      <li>Your login</li>
                      <li>Your password</li>
                      <li>
                        Any other required information to access this account
                      </li>
                    </ul>
                  </ul>
              <p className={styles.faint}>
                Note: This account is not yours after sending this information.
              </p>
            </div>
          </div>
        </div>
        {/* <div className={styles.chime}>
            <div className={styles.bankLogo}>
              <Image
                alt="Chime"
                src="/payment/chime-logo.svg"
                width={156.10}
                height={44.45}
                className={styles.chimeLogo}
              />
            </div>
            <h3>Account Number</h3>
            <h4>
              6891
              <span className={styles.spacer} />
              5536
              <span className={styles.spacer} />
              2031
            </h4>
            <h3>Routing Number</h3>
            <h4>
              103
              <span className={styles.spacer} />
              100
              <span className={styles.spacer} />
              195
            </h4>
          </div> */}
      </main>
    </div>
  );
}
