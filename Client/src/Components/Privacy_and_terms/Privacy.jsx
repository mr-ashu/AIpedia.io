import React from 'react';
import styles from "./Privacy.module.css";
 
const PrivacyAndPolicy = () => {
  
    return (
        <>
            <br />
            <br />
            <div className={styles.main_terms}  >
                <div className={styles.terms_artical}>
                    <h3>Privacy Policy</h3>
                    <br />
                    <br />

                    <p className={styles.notes}>
                        AI Pedia ("we" or "us") is committed to protecting the privacy of our website users
                        ("you"). This Privacy Policy describes how we collect, use, store, and share information
                        about you in connection with your use of our website [www.ai-pedia.com] (the "Website").
                    </p>

                    <br />




                    <div><p className={styles.intro}>Information We Collect</p>
                        <p className={styles.notes}>
                            We may collect the following information about you when you use the Website:
                        </p>
                        <p className={styles.point}>
                            <ul><li>Personal Information: We may collect your name and email address when you submit a review or contact us through the Website.</li></ul>
                            <ul><li>Usage Information: We may collect information about how you use the Website, such as the pages you visit, the links you click, and the features you use.</li></ul>
                            <ul><li>Device Information: We may collect information about the device you use to access the Website, such as the type of device, the operating system, and the browser type.</li></ul>
                            <ul><li>Cookies and Similar Technologies: We may use cookies and similar technologies to collect information about your use of the Website. You can learn more about how we use cookies and how you can manage them in our Cookie Policy.</li></ul>
                        </p>
                    </div>

                    <br />
                    <div><p className={styles.intro}>How We Use Your Information</p>
                        <p className={styles.notes}>
                            We may use the information we collect about you for the following purposes:
                        </p>
                        <p className={styles.point}>
                            <ul><li>To provide and improve the Website: We may use your information to operate and maintain the Website and to improve its features and functionality.</li></ul>
                            <ul><li>To communicate with you: We may use your email address to respond to your inquiries or to send you updates about the Website.</li></ul>
                            <ul><li>To personalize your experience: We may use your information to customize your experience on the Website and to recommend tools that may be of interest to you.</li></ul>
                            <ul><li>To protect our rights and interests: We may use your information to protect our rights and interests, such as detecting and preventing fraud and enforcing our Terms and Conditions.</li></ul>

                        </p>


                    </div>

                    <br />
                    <div><p className={styles.intro}>How We Share Your Information</p>
                        <p className={styles.notes}>
                            We may share your information with the following third parties:
                        </p>
                        <p className={styles.point}>
                            <ul><li>Service Providers: We may share your information with third-party service providers who help us to operate the Website, such as hosting providers and analytics providers.</li></ul>
                            <ul><li>Affiliates: We may share your information with our affiliates for the purposes described in this Privacy Policy.</li></ul>
                            <ul><li>Legal Requirements: We may disclose your information if required to do so by law or in response to a valid subpoena, court order, or other legal process.</li></ul>

                        </p>


                    </div>

                    <br />
                    <div><p className={styles.intro}>Your Choices</p>
                        <p className={styles.notes}>
                            You have the following choices regarding your information:
                        </p>
                        <p className={styles.point}>
                            <ul><li>Opt-Out of Email Communications: You may opt-out of receiving email communications from us by following the instructions in our emails.</li></ul>
                            <ul><li>Cookie Management: You can manage cookies through your browser settings or our Cookie Policy.</li></ul>


                        </p>

                    </div>

                    <br />
                    <div><p className={styles.intro}>Security</p>
                        <p className={styles.notes}>
                            We take reasonable measures to protect your information from unauthorized
                            access, use, disclosure, or destruction. However, no data security measures
                            can guarantee 100% security.
                        </p>
                    </div>

                    <br />
                    <div><p className={styles.intro}>Children's Privacy</p>
                        <p className={styles.notes}>
                            The Website is not intended for use by children under the age of 13. We do
                            not knowingly collect personal information from children under 13. If you
                            are a parent or guardian and believe that your child has provided us with
                            personal information, please contact us at [Your Contact Information] to request
                            deletion of that information.
                        </p>
                    </div>

                    <br />
                    <div><p className={styles.intro}>Changes to this Privacy Policy</p>
                        <p className={styles.notes}>
                            We may update this Privacy Policy from time to time. The updated Privacy
                            Policy will be posted on the Website with a new effective date. We encourage
                            you to review the Privacy Policy periodically.
                        </p>
                    </div>

                    <br />
                    <div><p className={styles.intro}>Contact Us</p>
                        <p className={styles.notes}>
                            If you have any questions or comments about this
                            Privacy Policy, please contact us at <a style={{ color: "aqua" }} href='aniket@ai-pedia.com'>aniket@ai-pedia.com.</a>
                        </p>
                    </div>






                    <div className={styles.end}></div>

                </div>






            </div>
        </>
    )
}

export default PrivacyAndPolicy
