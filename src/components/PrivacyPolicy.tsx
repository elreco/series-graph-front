import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
export default function PrivacyPolicy() {
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
            <h1 className="text-3xl font-bold sm:text-4xl">Privacy Policy</h1>
            <p className="mt-2 text-sm text-muted-foreground">Watch Peak</p>
            <p className="text-sm text-muted-foreground">Last updated: November 10, 2024</p>
          </div>
        </CardHeader>
        <CardContent className="space-y-8 px-6 pb-8 sm:px-8">
          <section className="space-y-3">
            <h2 className="text-2xl font-semibold">Introduction</h2>
            <p className="leading-relaxed text-muted-foreground">
              Watch Peak ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our mobile application.
            </p>
          </section>
          <Separator />
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Information We Collect</h2>
            <div className="space-y-3">
              <h3 className="text-lg font-medium">Account Information</h3>
              <p className="text-muted-foreground">When you sign in with Apple, we collect:</p>
              <ul className="ml-6 list-disc space-y-1 text-muted-foreground">
                <li>Your name (if you choose to share it)</li>
                <li>Your email address</li>
                <li>A unique user identifier</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-medium">Usage Data</h3>
              <p className="text-muted-foreground">We collect:</p>
              <ul className="ml-6 list-disc space-y-1 text-muted-foreground">
                <li>Series you follow</li>
                <li>Your search history</li>
                <li>Ratings and reviews you create</li>
                <li>Push notification preferences</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-medium">Automatically Collected Information</h3>
              <ul className="ml-6 list-disc space-y-1 text-muted-foreground">
                <li>Device information (model, OS version)</li>
                <li>App usage statistics</li>
                <li>Crash reports and performance data</li>
              </ul>
            </div>
          </section>
          <Separator />
          <section className="space-y-3">
            <h2 className="text-2xl font-semibold">How We Use Your Information</h2>
            <p className="text-muted-foreground">We use your information to:</p>
            <ul className="ml-6 list-disc space-y-1 text-muted-foreground">
              <li>Provide and maintain our service</li>
              <li>Personalize your experience</li>
              <li>Send notifications about new episodes and seasons</li>
              <li>Improve app functionality and user experience</li>
              <li>Respond to your requests and support needs</li>
            </ul>
          </section>
          <Separator />
          <section className="space-y-3">
            <h2 className="text-2xl font-semibold">Data Storage and Security</h2>
            <ul className="ml-6 list-disc space-y-1 text-muted-foreground">
              <li>All user data is securely stored on Supabase servers</li>
              <li>We use industry-standard encryption</li>
              <li>Your data is protected with secure authentication</li>
              <li>We do not sell your personal information to third parties</li>
            </ul>
          </section>
          <Separator />
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Third-Party Services</h2>
            <p className="text-muted-foreground">Watch Peak integrates with the following third-party services:</p>
            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-lg font-medium">Supabase</h3>
                <p className="text-muted-foreground">Database and authentication</p>
                <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">
                  Privacy Policy: https://supabase.com/privacy
                </a>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-medium">The Movie Database (TMDB)</h3>
                <p className="text-muted-foreground">TV series information and metadata</p>
                <a href="https://www.themoviedb.org/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">
                  Privacy Policy: https://www.themoviedb.org/privacy-policy
                </a>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-medium">OMDb API</h3>
                <p className="text-muted-foreground">Episode ratings data</p>
                <a href="https://www.omdbapi.com/legal.htm" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">
                  Privacy Policy: https://www.omdbapi.com/legal.htm
                </a>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-medium">Apple Sign-In</h3>
                <p className="text-muted-foreground">Authentication service</p>
                <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">
                  Privacy Policy: https://www.apple.com/legal/privacy/
                </a>
              </div>
            </div>
          </section>
          <Separator />
          <section className="space-y-3">
            <h2 className="text-2xl font-semibold">Your Rights</h2>
            <p className="text-muted-foreground">You have the right to:</p>
            <ul className="ml-6 list-disc space-y-1 text-muted-foreground">
              <li>Access your personal data</li>
              <li>Delete your account and all associated data</li>
              <li>Opt-out of push notifications</li>
              <li>Request a copy of your data</li>
              <li>Update your information at any time</li>
            </ul>
          </section>
          <Separator />
          <section className="space-y-3">
            <h2 className="text-2xl font-semibold">Data Retention</h2>
            <ul className="ml-6 list-disc space-y-1 text-muted-foreground">
              <li>Account data is retained while your account is active</li>
              <li>You can delete your account at any time from the Profile screen</li>
              <li>Upon account deletion, all personal data is permanently removed within 30 days</li>
              <li>Anonymous analytics data may be retained for up to 1 year</li>
            </ul>
          </section>
          <Separator />
          <section className="space-y-3">
            <h2 className="text-2xl font-semibold">Children's Privacy</h2>
            <p className="leading-relaxed text-muted-foreground">
              Watch Peak is not intended for children under 13. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.
            </p>
          </section>
          <Separator />
          <section className="space-y-3">
            <h2 className="text-2xl font-semibold">Push Notifications</h2>
            <p className="text-muted-foreground">We may send you push notifications about:</p>
            <ul className="ml-6 list-disc space-y-1 text-muted-foreground">
              <li>New episodes of shows you follow</li>
              <li>New seasons available</li>
              <li>Trending series</li>
              <li>App updates and announcements</li>
            </ul>
            <p className="leading-relaxed text-muted-foreground">
              You can disable push notifications at any time in your device settings or within the app.
            </p>
          </section>
          <Separator />
          <section className="space-y-3">
            <h2 className="text-2xl font-semibold">Changes to This Privacy Policy</h2>
            <p className="text-muted-foreground">We may update this Privacy Policy from time to time. We will notify you of any changes by:</p>
            <ul className="ml-6 list-disc space-y-1 text-muted-foreground">
              <li>Updating the "Last updated" date</li>
              <li>Sending an in-app notification</li>
              <li>Posting the new Privacy Policy in the app</li>
            </ul>
          </section>
          <Separator />
          <section className="space-y-3">
            <h2 className="text-2xl font-semibold">Data Sharing</h2>
            <div className="space-y-3">
              <div>
                <p className="font-medium text-muted-foreground">We do NOT:</p>
                <ul className="ml-6 list-disc space-y-1 text-muted-foreground">
                  <li>Sell your personal information</li>
                  <li>Share your data with advertisers</li>
                  <li>Use your data for marketing purposes outside the app</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-muted-foreground">We MAY share your information only:</p>
                <ul className="ml-6 list-disc space-y-1 text-muted-foreground">
                  <li>With your explicit consent</li>
                  <li>To comply with legal obligations</li>
                  <li>To protect our rights and safety</li>
                </ul>
              </div>
            </div>
          </section>
          <Separator />
          <section className="space-y-3">
            <h2 className="text-2xl font-semibold">International Data Transfers</h2>
            <p className="leading-relaxed text-muted-foreground">
              Your information may be transferred to and maintained on servers located outside of your country. We ensure appropriate safeguards are in place to protect your data.
            </p>
          </section>
          <Separator />
          <section className="space-y-3">
            <h2 className="text-2xl font-semibold">Contact Us</h2>
            <p className="leading-relaxed text-muted-foreground">
              If you have any questions about this Privacy Policy or your data, please contact us:
            </p>
            <p className="font-medium">
              Email:{' '}
              <a href="mailto:alexandrelecorre.pro@gmail.com" className="text-primary hover:underline">
                alexandrelecorre.pro@gmail.com
              </a>
            </p>
          </section>
          <Separator />
          <section className="space-y-3">
            <h2 className="text-2xl font-semibold">Your California Privacy Rights</h2>
            <p className="text-muted-foreground">If you are a California resident, you have the right to:</p>
            <ul className="ml-6 list-disc space-y-1 text-muted-foreground">
              <li>Know what personal information is collected</li>
              <li>Know if your personal information is sold or disclosed</li>
              <li>Opt-out of the sale of your personal information</li>
              <li>Access your personal information</li>
              <li>Request deletion of your personal information</li>
            </ul>
          </section>
          <Separator />
          <section className="space-y-3">
            <h2 className="text-2xl font-semibold">GDPR Compliance (EU Users)</h2>
            <p className="text-muted-foreground">If you are located in the European Economic Area (EEA), you have additional rights under GDPR:</p>
            <ul className="ml-6 list-disc space-y-1 text-muted-foreground">
              <li>Right to access your data</li>
              <li>Right to rectification</li>
              <li>Right to erasure ("right to be forgotten")</li>
              <li>Right to restrict processing</li>
              <li>Right to data portability</li>
              <li>Right to object to processing</li>
              <li>Rights related to automated decision-making</li>
            </ul>
          </section>
          <Separator />
          <section className="space-y-3">
            <h2 className="text-2xl font-semibold">Consent</h2>
            <p className="leading-relaxed text-muted-foreground">
              By using Watch Peak, you consent to our Privacy Policy and agree to its terms.
            </p>
          </section>
          <Separator />
          <section className="rounded-lg bg-muted/50 p-4">
            <p className="text-sm italic text-muted-foreground">
              <strong>Note:</strong> This Privacy Policy is effective as of the date stated above and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted in the app.
            </p>
          </section>
        </CardContent>
      </Card>
    </div>
  );
}