import React from 'react'
import styles from "./Terms.module.css";
import { useSelector } from 'react-redux';

const Terms = () => {
    const theme = useSelector((state) => state.themeChange.theme);

    return (
        <>
            <br />
            <br />
            <div className={styles.main_terms} style={theme ? { "backgroundColor": "rgb(81,82,85)" } : { "backgroundColor": "rgb(21, 24, 28)" }}>

                <div className={styles.terms_artical}>
                    <h3>Terms and Conditions</h3>
                    <br />
                    <br />
                    <div><p className={styles.intro}>Introduction</p>
                        <p className={styles.notes}>
                            Welcome to AI Pedia, a collection of AI tools designed to help you
                            streamline your workflow and increase productivity. By accessing or
                            using AI Pedia, you agree to be bound by these terms and conditions,
                            as well as our privacy policy.
                        </p>
                    </div>

                    <br />
                    <div><p className={styles.intro}>User Conduct</p>
                        <p className={styles.notes}>
                            You agree to use AI Pedia in accordance with all applicable laws
                            and regulations. You may not use AI Pedia for any unlawful or harmful
                            purpose, including but not limited to spamming, hacking, or distributing malicious software.
                        </p>
                    </div>

                    <br />
                    <div><p className={styles.intro}>Intellectual Property Rights</p>
                        <p className={styles.notes}>
                            All intellectual property associated with AI Pedia, including
                            trademarks, logos, and copyrighted material, is owned by AI Pedia
                            or its licensors. You may not reproduce, distribute, or display any
                            content from AI Pedia without our prior written consent.
                        </p>
                    </div>

                    <br />
                    <div><p className={styles.intro}>Limitation of Liability</p>
                        <p className={styles.notes}>
                            AI Pedia shall not be liable for any errors, omissions, or damages that
                            may arise from the use of AI Pedia, including but not limited to direct,
                            indirect, incidental, punitive, and consequential damages.
                        </p>
                    </div>

                    <br />
                    <div><p className={styles.intro}>Termination and Suspension</p>
                        <p className={styles.notes}>
                            AI Pedia may terminate or suspend your account or access to AI Pedia
                            at any time for any reason, including but not limited to violation of
                            these terms and conditions.
                        </p>
                    </div>

                    <br />
                    <div><p className={styles.intro}>User-Generated Content</p>
                        <p className={styles.notes}>
                            AI Pedia allows users to submit reviews, save and like tools, and engage
                            in other user-generated content. By submitting content to AI Pedia,
                            you grant AI Pedia a non-exclusive, worldwide, royalty-free license to use, reproduce,
                            and distribute your content in connection with AI Pedia and our business.
                        </p>
                    </div>

                    <br />
                    <div><p className={styles.intro}>Privacy Policy</p>
                        <p className={styles.notes}>
                            AI Pedia collects and uses personal data from our users in accordance
                            with our privacy policy. By using AI Pedia, you agree to our collection,
                            use, and storage of your personal data as outlined in our privacy policy.
                        </p>
                    </div>

                    <br />
                    <div><p className={styles.intro}>Governing Law and Dispute Resolution</p>
                        <p className={styles.notes}>
                            These terms and conditions shall be governed by and construed in accordance
                            with the laws of India, regardless of conflicts of laws principles.
                            Any disputes arising from these terms and conditions shall be resolved
                            through arbitration in India in accordance with the rules of the Indian
                            Arbitration Association.
                        </p>
                    </div>

                    <br />
                    <div><p className={styles.intro}>Modifications to the Terms and Conditions</p>
                        <p className={styles.notes}>
                            AI Pedia reserves the right to modify these
                            terms and conditions at any time without notice. Your
                            continued use of AI Pedia after any such modifications
                            indicates your acceptance of the modified terms and conditions.
                        </p>

                    </div>

                    <br />
                    <div><p className={styles.intro}>Contact Information</p>
                        <p className={styles.notes}>
                            If you have any questions or concerns about these terms and conditions,
                            please contact us at <a style={{ color: "aqua" }} href='aniket@ai-pedia.com'>aniket@ai-pedia.com.</a>
                        </p>
                        <div className={styles.end}></div>
                    </div>
                </div>






            </div>
        </>
    )
}

export default Terms
