import React, { useState, useEffect } from "react";
import { ContactInquiry } from "@/entities/ContactInquiry";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const content = {
  en: {
    hero: {
      title: "Get Your Free Quote",
      subtitle: "Tell us about your project and we'll get back to you within 24 hours"
    },
    form: {
      name: "Full Name",
      email: "Email Address",
      phone: "Phone Number",
      company: "Company Name (Optional)",
      projectType: "Project Type",
      projectTypes: {
        starter: "Starter Package ($199)",
        business: "Business Package ($499)",
        premium: "Premium Package ($999)",
        custom: "Custom Project"
      },
      budget: "Budget Range",
      budgetRanges: {
        "199-499": "$199 - $499",
        "500-999": "$500 - $999",
        "1000-2999": "$1,000 - $2,999",
        "3000+": "$3,000+"
      },
      message: "Tell us about your project",
      submit: "Send Inquiry",
      submitting: "Sending...",
      success: "Thank you! We'll contact you soon."
    },
    contact: {
      title: "Contact Information",
      email: "info@webmate.nz",
      phone: "+64 21 XXX XXXX",
      location: "Auckland, New Zealand"
    }
  },
  zh: {
    hero: {
      title: "获取免费报价",
      subtitle: "告诉我们您的项目需求，我们将在24小时内回复您"
    },
    form: {
      name: "姓名",
      email: "电子邮箱",
      phone: "联系电话",
      company: "公司名称（可选）",
      projectType: "项目类型",
      projectTypes: {
        starter: "基础套餐 ($199)",
        business: "商务套餐 ($499)",
        premium: "高级套餐 ($999)",
        custom: "定制项目"
      },
      budget: "预算范围",
      budgetRanges: {
        "199-499": "$199 - $499",
        "500-999": "$500 - $999",
        "1000-2999": "$1,000 - $2,999",
        "3000+": "$3,000+"
      },
      message: "告诉我们您的项目需求",
      submit: "发送咨询",
      submitting: "发送中...",
      success: "感谢！我们会尽快联系您。"
    },
    contact: {
      title: "联系信息",
      email: "info@webmate.nz",
      phone: "+64 21 XXX XXXX",
      location: "新西兰，奥克兰"
    }
  }
};

export default function Contact() {
  const [language, setLanguage] = useState('en');
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    project_type: "",
    budget: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem('webmate-language') || 'en';
    setLanguage(savedLang);

    const handleLanguageChange = (e) => setLanguage(e.detail);
    window.addEventListener('languageChange', handleLanguageChange);
    return () => window.removeEventListener('languageChange', handleLanguageChange);
  }, []);

  const t = content[language];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    await ContactInquiry.create({
      ...formData,
      language
    });

    setIsSuccess(true);
    setIsSubmitting(false);

    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        project_type: "",
        budget: "",
        message: ""
      });
      setIsSuccess(false);
    }, 3000);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#1E3A8A] to-[#059669] bg-clip-text text-transparent">
              {t.hero.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.hero.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <Card className="border-none shadow-2xl">
                <CardContent className="p-8">
                  {isSuccess ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="w-20 h-20 bg-gradient-to-br from-[#059669] to-[#10B981] rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{t.form.success}</h3>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <Label htmlFor="name">{t.form.name} *</Label>
                        <Input
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="mt-2"
                        />
                      </div>

                      <div>
                        <Label htmlFor="email">{t.form.email} *</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="mt-2"
                        />
                      </div>

                      <div>
                        <Label htmlFor="phone">{t.form.phone}</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          className="mt-2"
                        />
                      </div>

                      <div>
                        <Label htmlFor="company">{t.form.company}</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => setFormData({...formData, company: e.target.value})}
                          className="mt-2"
                        />
                      </div>

                      <div>
                        <Label htmlFor="project_type">{t.form.projectType}</Label>
                        <Select
                          value={formData.project_type}
                          onValueChange={(value) => setFormData({...formData, project_type: value})}
                        >
                          <SelectTrigger className="mt-2">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="starter">{t.form.projectTypes.starter}</SelectItem>
                            <SelectItem value="business">{t.form.projectTypes.business}</SelectItem>
                            <SelectItem value="premium">{t.form.projectTypes.premium}</SelectItem>
                            <SelectItem value="custom">{t.form.projectTypes.custom}</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="budget">{t.form.budget}</Label>
                        <Select
                          value={formData.budget}
                          onValueChange={(value) => setFormData({...formData, budget: value})}
                        >
                          <SelectTrigger className="mt-2">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="199-499">{t.form.budgetRanges["199-499"]}</SelectItem>
                            <SelectItem value="500-999">{t.form.budgetRanges["500-999"]}</SelectItem>
                            <SelectItem value="1000-2999">{t.form.budgetRanges["1000-2999"]}</SelectItem>
                            <SelectItem value="3000+">{t.form.budgetRanges["3000+"]}</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="message">{t.form.message} *</Label>
                        <Textarea
                          id="message"
                          required
                          value={formData.message}
                          onChange={(e) => setFormData({...formData, message: e.target.value})}
                          rows={5}
                          className="mt-2"
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-[#1E3A8A] to-[#059669] text-white text-lg py-6 hover:shadow-xl transition-all duration-300"
                      >
                        {isSubmitting ? t.form.submitting : t.form.submit}
                        <Send className="w-5 h-5 ml-2" />
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#1E3A8A] to-[#059669] bg-clip-text text-transparent">
                  {t.contact.title}
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1E3A8A] to-[#059669] flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-gray-600">{t.contact.email}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1E3A8A] to-[#059669] flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{language === 'en' ? 'Phone' : '电话'}</h3>
                      <p className="text-gray-600">{t.contact.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1E3A8A] to-[#059669] flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{language === 'en' ? 'Location' : '地址'}</h3>
                      <p className="text-gray-600">{t.contact.location}</p>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="bg-gradient-to-br from-[#1E3A8A] to-[#059669] text-white border-none shadow-2xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">
                    {language === 'en' ? 'Why Choose Us?' : '为什么选择我们？'}
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 flex-shrink-0" />
                      <span>{language === 'en' ? 'Fast 24-hour response time' : '24小时快速响应'}</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 flex-shrink-0" />
                      <span>{language === 'en' ? 'Transparent pricing, no hidden fees' : '透明定价，无隐藏费用'}</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 flex-shrink-0" />
                      <span>{language === 'en' ? 'Experienced NZ-based team' : '经验丰富的新西兰本地团队'}</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 flex-shrink-0" />
                      <span>{language === 'en' ? '100% satisfaction guarantee' : '100%满意保证'}</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}