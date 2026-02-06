import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
export default function UserPrivacy() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8 sm:py-12">
      <Card className="border-none shadow-lg">
        <CardHeader className="space-y-6 pb-8">
          <div className="flex items-center justify-center gap-4">
            <svg className="h-12 w-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47 41">
              <g id="logogram" transform="translate(0, 0) rotate(0)">
                <path d="M39.8278 33.3026L39.8308 33.3061L33.3607 38.9831C32.0341 40.1758 30.3188 40.8515 28.5307 40.8849L28.5157 40.8852H6.3433C5.52252 40.9197 4.70461 40.766 3.9529 40.4361C3.18789 40.1004 2.51205 39.5912 1.97981 38.9489C1.44755 38.3069 1.07385 37.55 0.888129 36.7388C0.705857 35.9416 0.709812 35.1125 0.900558 34.3168L2.60764 25.6248C2.75949 24.8681 3.16084 24.1833 3.74828 23.6792L3.83198 23.6074C3.65027 23.3331 3.51734 23.0292 3.43941 22.709C3.33602 22.2843 3.3324 21.8424 3.42763 21.4174L5.13811 12.7091L5.14074 12.6968C5.47362 11.1342 6.31209 9.72339 7.52782 8.68041L13.4516 3.48275C13.7257 3.16967 14.0266 2.87803 14.3521 2.61141C15.6488 1.54924 17.2624 0.944386 18.9409 0.890845L18.9688 0.889954L41.1681 0.953502C41.988 0.919415 42.8049 1.07313 43.5558 1.40267C44.3209 1.73844 44.9967 2.24759 45.5289 2.88973C46.0611 3.53177 46.4349 4.28874 46.6206 5.10019C46.8031 5.89771 46.7988 6.72616 46.6084 7.52144L42.3681 29.1669L42.362 29.1933C41.9896 30.8017 41.0994 32.2445 39.8278 33.3026Z" fill="#1E293B"></path>
                <path d="M40.8216 2.95355C41.4048 2.92412 41.9868 3.03161 42.5211 3.26725C43.0554 3.50288 43.5272 3.86014 43.8988 4.31063C44.2703 4.76113 44.5313 5.29225 44.661 5.86162C44.7906 6.43099 44.7853 7.02284 44.6454 7.58977L40.4233 29.2491C40.1268 30.536 39.4127 31.6886 38.3925 32.5273C37.3723 33.3659 36.1032 33.8434 34.7832 33.8853H12.6929C12.1096 33.9143 11.5275 33.8068 10.993 33.5712C10.4585 33.3356 9.98642 32.9785 9.61431 32.5282C9.24221 32.078 8.98033 31.5471 8.84959 30.9778C8.71885 30.4086 8.72283 29.8165 8.86121 29.2491L10.566 20.4866C10.6659 20.0589 10.9045 19.6763 11.2445 19.3983C11.5845 19.1202 12.0069 18.9623 12.446 18.9492C16.4769 19.0926 20.3485 19.3952 23.9572 20.6937L24.7538 25.7043C24.7733 25.8253 24.8371 25.9346 24.9328 26.0112C25.0285 26.0877 25.1492 26.126 25.2716 26.1185C25.4122 26.1161 25.5496 26.0765 25.6699 26.0038C25.7902 25.931 25.8892 25.8277 25.9567 25.7043L28.6811 20.6937L34.13 18.9731C34.2618 18.9309 34.3804 18.8551 34.474 18.7532C34.5676 18.6512 34.633 18.5266 34.6637 18.3916C34.6949 18.2723 34.6802 18.1456 34.6228 18.0365C34.5653 17.9274 34.4691 17.8439 34.353 17.8021L29.5733 16.0894L28.7767 11.079C28.7573 10.9573 28.6938 10.847 28.5983 10.7691C28.5028 10.6913 28.382 10.6513 28.2589 10.6567C28.1175 10.66 27.9795 10.7008 27.8591 10.775C27.7387 10.8492 27.6402 10.9541 27.5738 11.079L24.8494 16.0894C20.8987 17.2226 16.8109 17.8071 12.7009 17.8261C12.5036 17.8429 12.3052 17.8124 12.1219 17.7376C11.9386 17.6627 11.7757 17.5456 11.6466 17.3955C11.5175 17.2454 11.4259 17.0667 11.3793 16.8743C11.3327 16.6819 11.3324 16.481 11.3785 16.2885L13.0833 7.52598C13.3782 6.23972 14.0907 5.0873 15.1096 4.2486C16.1285 3.40989 17.3964 2.93224 18.7154 2.88995L40.8216 2.95355Z" fill="#00E5FF"></path>
              </g>
            </svg>
          </div>
          <div className="text-center">
            <h1 className="text-3xl font-bold sm:text-4xl">User Privacy Choices</h1>
            <p className="mt-2 text-sm text-muted-foreground">Series Graph</p>
            <p className="text-sm text-muted-foreground">Last updated: November 11, 2024</p>
          </div>
        </CardHeader>
        <CardContent className="space-y-8 px-6 pb-8 sm:px-8">
          <section className="space-y-3">
            <h2 className="text-2xl font-semibold">Introduction</h2>
            <p className="leading-relaxed text-muted-foreground">
              At Series Graph, we believe you should have control over your personal information. This document explains the privacy choices available to you and how to exercise your rights.
            </p>
          </section>
          <Separator />
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Your Privacy Controls</h2>
            <div className="space-y-6">
              <div className="space-y-3">
                <h3 className="text-xl font-semibold">1. Account Management</h3>
                <div className="space-y-3">
                  <h4 className="text-lg font-medium">Sign In with Apple Privacy</h4>
                  <p className="text-muted-foreground">When using Sign In with Apple, you can choose to:</p>
                  <ul className="ml-6 list-disc space-y-1 text-muted-foreground">
                    <li>Share or hide your real email address</li>
                    <li>Use Apple's private relay email service</li>
                    <li>Control what information is shared with Series Graph</li>
                  </ul>
                  <p className="text-sm text-muted-foreground">
                    Access your Apple ID settings at: <span className="font-medium">Settings &gt; [Your Name] &gt; Password & Security &gt; Apps Using Apple ID</span>
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="text-lg font-medium">Delete Your Account</h4>
                  <ul className="ml-6 list-disc space-y-1 text-muted-foreground">
                    <li>Open Series Graph app</li>
                    <li>Go to Profile &gt; Settings</li>
                    <li>Tap "Delete Account"</li>
                    <li>Confirm deletion</li>
                    <li>All your personal data will be permanently deleted within 30 days</li>
                  </ul>
                </div>
              </div>
              <Separator />
              <div className="space-y-3">
                <h3 className="text-xl font-semibold">2. Notification Controls</h3>
                <div className="space-y-3">
                  <h4 className="text-lg font-medium">Manage Push Notifications</h4>
                  <p className="text-muted-foreground">You can control notifications for:</p>
                  <ul className="ml-6 list-disc space-y-1 text-muted-foreground">
                    <li>New episodes of followed shows</li>
                    <li>New seasons available</li>
                    <li>Trending series recommendations</li>
                    <li>App updates</li>
                  </ul>
                  <p className="font-medium text-muted-foreground">To manage notifications:</p>
                  <div className="space-y-2">
                    <p className="text-sm font-medium">In-App:</p>
                    <ul className="ml-6 list-disc space-y-1 text-sm text-muted-foreground">
                      <li>Profile &gt; Settings &gt; Notifications</li>
                      <li>Toggle specific notification types on/off</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium">iOS Settings:</p>
                    <ul className="ml-6 list-disc space-y-1 text-sm text-muted-foreground">
                      <li>Settings &gt; Notifications &gt; Series Graph</li>
                      <li>Customize alert style, sounds, and badges</li>
                    </ul>
                  </div>
                </div>
              </div>
              <Separator />
              <div className="space-y-3">
                <h3 className="text-xl font-semibold">3. Data Collection Preferences</h3>
                <div className="space-y-3">
                  <h4 className="text-lg font-medium">Search History</h4>
                  <ul className="ml-6 list-disc space-y-1 text-muted-foreground">
                    <li>View your search history: Profile &gt; Search History</li>
                    <li>Clear individual searches: Swipe left on any search</li>
                    <li>Clear all search history: Profile &gt; Settings &gt; Clear Search History</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="text-lg font-medium">Followed Shows</h4>
                  <ul className="ml-6 list-disc space-y-1 text-muted-foreground">
                    <li>Manage followed shows: Follows tab</li>
                    <li>Unfollow any show: Tap the heart icon on the show page</li>
                  </ul>
                </div>
              </div>
              <Separator />
              <div className="space-y-3">
                <h3 className="text-xl font-semibold">4. Data Access & Export</h3>
                <div className="space-y-3">
                  <h4 className="text-lg font-medium">Request Your Data</h4>
                  <p className="text-muted-foreground">To request a copy of all data we have about you:</p>
                  <ol className="ml-6 list-decimal space-y-1 text-muted-foreground">
                    <li>Email: <a href="mailto:alexandrelecorre.pro@gmail.com" className="text-primary hover:underline">alexandrelecorre.pro@gmail.com</a></li>
                    <li>Subject: "Data Export Request"</li>
                    <li>Include: Your registered email address</li>
                    <li>We will respond within 30 days with your data in a portable format</li>
                  </ol>
                  <p className="font-medium text-muted-foreground">What data you can access:</p>
                  <ul className="ml-6 list-disc space-y-1 text-muted-foreground">
                    <li>Account information (email, user ID)</li>
                    <li>List of followed shows</li>
                    <li>Search history</li>
                    <li>Notification logs</li>
                    <li>Account creation date</li>
                  </ul>
                </div>
              </div>
              <Separator />
              <div className="space-y-3">
                <h3 className="text-xl font-semibold">5. Data Deletion Rights</h3>
                <div className="space-y-3">
                  <h4 className="text-lg font-medium">Delete Specific Data</h4>
                  <ul className="ml-6 list-disc space-y-1 text-muted-foreground">
                    <li>Delete search history: Profile &gt; Settings &gt; Clear Search History</li>
                    <li>Remove followed shows: Unfollow shows individually</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="text-lg font-medium">Delete All Your Data</h4>
                  <p className="text-muted-foreground">When you delete your account, we permanently remove:</p>
                  <ul className="ml-6 list-disc space-y-1 text-muted-foreground">
                    <li>Your profile information</li>
                    <li>Email address and user ID</li>
                    <li>All followed shows</li>
                    <li>Complete search history</li>
                    <li>Push notification tokens</li>
                    <li>All associated personal data</li>
                  </ul>
                  <p className="text-sm italic text-muted-foreground">
                    Note: Anonymized analytics data may be retained for up to 1 year for app improvement purposes, but cannot be linked back to you.
                  </p>
                </div>
              </div>
              <Separator />
              <div className="space-y-3">
                <h3 className="text-xl font-semibold">6. Opt-Out Options</h3>
                <p className="text-muted-foreground">You can opt out of:</p>
                <div className="space-y-3">
                  <h4 className="text-lg font-medium">Push Notifications</h4>
                  <ul className="ml-6 list-disc space-y-1 text-muted-foreground">
                    <li>Disable in-app: Profile &gt; Settings &gt; Notifications</li>
                    <li>Disable system-wide: iOS Settings &gt; Notifications &gt; Series Graph</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="text-lg font-medium">Data Collection for App Improvement</h4>
                  <ul className="ml-6 list-disc space-y-1 text-muted-foreground">
                    <li>We collect minimal analytics to improve the app</li>
                    <li>You can limit this by enabling "Limit Ad Tracking" in iOS Settings &gt; Privacy & Security &gt; Tracking</li>
                  </ul>
                </div>
              </div>
              <Separator />
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">7. Third-Party Service Controls</h3>
                <p className="text-muted-foreground">Series Graph uses third-party services. You can control how they use your data:</p>
                <div className="space-y-3">
                  <h4 className="text-lg font-medium">Supabase (Database)</h4>
                  <ul className="ml-6 list-disc space-y-1 text-muted-foreground">
                    <li>Data stored securely with encryption</li>
                    <li>Protected by Row Level Security policies</li>
                    <li>Privacy Policy: <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://supabase.com/privacy</a></li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="text-lg font-medium">The Movie Database (TMDB)</h4>
                  <ul className="ml-6 list-disc space-y-1 text-muted-foreground">
                    <li>We only fetch public TV show information</li>
                    <li>No personal data is shared with TMDB</li>
                    <li>Privacy Policy: <a href="https://www.themoviedb.org/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://www.themoviedb.org/privacy-policy</a></li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="text-lg font-medium">OMDb API</h4>
                  <ul className="ml-6 list-disc space-y-1 text-muted-foreground">
                    <li>We only fetch public ratings data</li>
                    <li>No personal data is shared with OMDb</li>
                    <li>Privacy Policy: <a href="https://www.omdbapi.com/legal.htm" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://www.omdbapi.com/legal.htm</a></li>
                  </ul>
                </div>
              </div>
              <Separator />
              <div className="space-y-3">
                <h3 className="text-xl font-semibold">8. California Residents (CCPA Rights)</h3>
                <p className="text-muted-foreground">If you are a California resident, you have the right to:</p>
                <div className="space-y-3">
                  <h4 className="text-lg font-medium">Right to Know</h4>
                  <p className="text-muted-foreground">Request what personal information we collect, use, disclose, and sell about you.</p>
                </div>
                <div className="space-y-3">
                  <h4 className="text-lg font-medium">Right to Delete</h4>
                  <p className="text-muted-foreground">Request deletion of your personal information.</p>
                </div>
                <div className="space-y-3">
                  <h4 className="text-lg font-medium">Right to Opt-Out</h4>
                  <p className="text-muted-foreground">Opt-out of the sale of your personal information (Note: We do NOT sell your information).</p>
                </div>
                <div className="space-y-3">
                  <h4 className="text-lg font-medium">Right to Non-Discrimination</h4>
                  <p className="text-muted-foreground">Exercise your privacy rights without discriminatory treatment.</p>
                </div>
                <div className="rounded-lg bg-muted/50 p-4">
                  <p className="text-sm font-medium">To exercise these rights:</p>
                  <p className="text-sm text-muted-foreground">Email: <a href="mailto:alexandrelecorre.pro@gmail.com" className="text-primary hover:underline">alexandrelecorre.pro@gmail.com</a></p>
                  <p className="text-sm text-muted-foreground">Subject: "CCPA Request - [Your Right]"</p>
                </div>
              </div>
              <Separator />
              <div className="space-y-3">
                <h3 className="text-xl font-semibold">9. EU Residents (GDPR Rights)</h3>
                <p className="text-muted-foreground">If you are located in the European Economic Area (EEA), you have additional rights:</p>
                <div className="space-y-2">
                  <h4 className="text-base font-medium">Right of Access</h4>
                  <p className="text-sm text-muted-foreground">Request access to your personal data.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-base font-medium">Right to Rectification</h4>
                  <p className="text-sm text-muted-foreground">Request correction of inaccurate personal data.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-base font-medium">Right to Erasure</h4>
                  <p className="text-sm text-muted-foreground">Request deletion of your personal data ("right to be forgotten").</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-base font-medium">Right to Restrict Processing</h4>
                  <p className="text-sm text-muted-foreground">Request limitation of how we process your data.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-base font-medium">Right to Data Portability</h4>
                  <p className="text-sm text-muted-foreground">Receive your personal data in a machine-readable format.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-base font-medium">Right to Object</h4>
                  <p className="text-sm text-muted-foreground">Object to processing of your personal data for specific purposes.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-base font-medium">Rights Related to Automated Decision-Making</h4>
                  <p className="text-sm text-muted-foreground">We do not use automated decision-making or profiling.</p>
                </div>
                <div className="rounded-lg bg-muted/50 p-4">
                  <p className="text-sm font-medium">To exercise these rights:</p>
                  <p className="text-sm text-muted-foreground">Email: <a href="mailto:alexandrelecorre.pro@gmail.com" className="text-primary hover:underline">alexandrelecorre.pro@gmail.com</a></p>
                  <p className="text-sm text-muted-foreground">Subject: "GDPR Request - [Your Right]"</p>
                  <p className="text-sm text-muted-foreground">We will respond within 30 days.</p>
                </div>
              </div>
              <Separator />
              <div className="space-y-3">
                <h3 className="text-xl font-semibold">10. Device-Level Privacy Controls</h3>
                <h4 className="text-lg font-medium">iOS Privacy Settings</h4>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium">Location Services</p>
                    <ul className="ml-6 list-disc space-y-1 text-sm text-muted-foreground">
                      <li>Series Graph does not use location services</li>
                      <li>No location data is collected</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium">Photos Access</p>
                    <ul className="ml-6 list-disc space-y-1 text-sm text-muted-foreground">
                      <li>Only used when you choose to save/share rating heatmaps</li>
                      <li>Manage: Settings &gt; Privacy & Security &gt; Photos &gt; Series Graph</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium">Tracking</p>
                    <ul className="ml-6 list-disc space-y-1 text-sm text-muted-foreground">
                      <li>Series Graph does not track you across other apps or websites</li>
                      <li>Manage: Settings &gt; Privacy & Security &gt; Tracking</li>
                    </ul>
                  </div>
                </div>
              </div>
              <Separator />
              <div className="space-y-3">
                <h3 className="text-xl font-semibold">11. Children's Privacy Choices</h3>
                <p className="leading-relaxed text-muted-foreground">
                  Series Graph is not intended for users under 13 years of age. If you are a parent or guardian and believe your child has provided personal information to us:
                </p>
                <ul className="ml-6 list-disc space-y-1 text-muted-foreground">
                  <li>Contact us immediately at: <a href="mailto:alexandrelecorre.pro@gmail.com" className="text-primary hover:underline">alexandrelecorre.pro@gmail.com</a></li>
                  <li>We will delete the information promptly</li>
                </ul>
              </div>
              <Separator />
              <div className="space-y-3">
                <h3 className="text-xl font-semibold">12. Questions & Support</h3>
                <p className="text-muted-foreground">If you have questions about your privacy choices or need help exercising your rights:</p>
                <div className="space-y-2">
                  <p className="font-medium">Email: <a href="mailto:alexandrelecorre.pro@gmail.com" className="text-primary hover:underline">alexandrelecorre.pro@gmail.com</a></p>
                  <p className="text-sm text-muted-foreground">Response Time: Within 48 hours for inquiries, 30 days for data requests</p>
                </div>
                <div className="space-y-2">
                  <p className="font-medium text-muted-foreground">When contacting us, please include:</p>
                  <ul className="ml-6 list-disc space-y-1 text-muted-foreground">
                    <li>Your registered email address</li>
                    <li>Specific privacy choice or right you want to exercise</li>
                    <li>Any relevant details to verify your identity</li>
                  </ul>
                </div>
              </div>
              <Separator />
              <div className="space-y-3">
                <h3 className="text-xl font-semibold">13. Changes to Privacy Choices</h3>
                <p className="text-muted-foreground">We may update the privacy choices available to you. When we do:</p>
                <ul className="ml-6 list-disc space-y-1 text-muted-foreground">
                  <li>We'll update this document</li>
                  <li>We'll notify you in the app</li>
                  <li>The "Last updated" date will be changed</li>
                  <li>You'll always have the option to delete your account if you disagree with changes</li>
                </ul>
              </div>
              <Separator />
              <div className="space-y-3">
                <h3 className="text-xl font-semibold">14. Your Privacy, Your Control</h3>
                <p className="text-muted-foreground">Remember:</p>
                <ul className="ml-6 list-none space-y-1 text-muted-foreground">
                  <li>✓ You own your data</li>
                  <li>✓ You can access your data anytime</li>
                  <li>✓ You can delete your data anytime</li>
                  <li>✓ You can opt-out of notifications anytime</li>
                  <li>✓ We never sell your personal information</li>
                  <li>✓ We only collect what's necessary for the app to work</li>
                </ul>
              </div>
              <Separator />
              <div className="space-y-3">
                <h3 className="text-xl font-semibold">Commitment</h3>
                <p className="leading-relaxed text-muted-foreground">
                  We are committed to transparency and giving you meaningful control over your personal information. Your privacy choices are not just legal requirements – they are fundamental rights that we respect and protect.
                </p>
              </div>
              <Separator />
              <div className="space-y-3">
                <h3 className="text-xl font-semibold">Contact</h3>
                <p className="text-muted-foreground">For any privacy-related questions or to exercise your rights:</p>
                <p className="font-medium">
                  Email:{' '}
                  <a href="mailto:alexandrelecorre.pro@gmail.com" className="text-primary hover:underline">
                    alexandrelecorre.pro@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </section>
          <Separator />
          <section className="rounded-lg bg-muted/50 p-4">
            <p className="text-sm italic text-muted-foreground">
              By using Series Graph, you acknowledge that you have read and understood your privacy choices and how to exercise them.
            </p>
          </section>
        </CardContent>
      </Card>
    </div>
  );
}