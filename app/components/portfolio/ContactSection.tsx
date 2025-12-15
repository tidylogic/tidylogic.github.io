import type { Contact } from "~/data/types";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

interface ContactSectionProps {
  contact: Contact;
}

/**
 * 연락처 섹션
 */
export function ContactSection({ contact }: ContactSectionProps) {
  const contactItems = [
    { label: "이메일", value: contact.email, href: `mailto:${contact.email}`, icon: "✉️" },
    { label: "전화번호", value: contact.phone, href: `tel:${contact.phone}`, icon: "📞" },
    { label: "GitHub", value: contact.github, href: contact.github, icon: "🐙" },
    { label: "LinkedIn", value: contact.linkedin, href: contact.linkedin, icon: "💼" },
    { label: "블로그", value: contact.blog, href: contact.blog, icon: "📝" },
    { label: "웹사이트", value: contact.website, href: contact.website, icon: "🌐" },
  ].filter((item) => item.value);

  return (
    <section>
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">연락처</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {contactItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href?.startsWith("http") ? "_blank" : undefined}
                rel={item.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-2 p-2 rounded-md hover:bg-accent transition-colors"
              >
                <span className="text-lg">{item.icon}</span>
                <div>
                  <p className="text-xs text-muted-foreground">{item.label}</p>
                  <p className="text-sm font-medium text-foreground break-all">
                    {item.value?.replace("https://", "").replace("http://", "")}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

