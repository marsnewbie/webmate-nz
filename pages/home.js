
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import {
  Check, Zap, Shield, TrendingUp, Star, ArrowRight,
  Globe, Smartphone, Search, Palette, Code, Sparkles
} from "lucide-react";
import { motion } from "framer-motion";

const content = {
  en: {
    hero: {
      badge: "Professional Web Design from $199",
      title: "Transform Your Business with a Stunning Website",
      subtitle: "Award-winning web design for New Zealand businesses. Stand out from competitors with a professional, SEO-optimized website that converts visitors into customers.",
      cta: "Get Started Now",
      secondary: "View Our Work"
    },
    features: {
      title: "Why Choose Webmate NZ?",
      items: [
        { icon: Zap, title: "Lightning Fast", desc: "Optimized for speed and performance" },
        { icon: Search, title: "SEO Optimized", desc: "Built to rank on Google from day one" },
        { icon: Smartphone, title: "Mobile First", desc: "Perfect on every device and screen size" },
        { icon: Shield, title: "Secure & Reliable", desc: "Enterprise-grade security included" },
        { icon: Palette, title: "Custom Design", desc: "Unique designs tailored to your brand" },
        { icon: TrendingUp, title: "Conversion Focused", desc: "Designed to turn visitors into customers" }
      ]
    },
    pricing: {
      title: "Flexible Pricing for Every Business",
      subtitle: "Professional websites starting from just $199",
      description: "Every project is unique. We create custom solutions tailored to your specific needs and budget.",
      starting: "Starting from",
      custom: "Custom pricing based on your requirements",
      features: [
        "Responsive mobile-friendly design",
        "SEO optimization included",
        "Professional custom design",
        "Secure and fast hosting",
        "Ongoing support and maintenance",
        "E-commerce capabilities (if needed)",
        "Content management system",
        "Analytics and reporting tools"
      ],
      cta: "Get Your Custom Quote"
    },
    process: {
      title: "Our Simple 4-Step Process",
      steps: [
        { title: "Consultation", desc: "Discuss your vision and requirements" },
        { title: "Design", desc: "Create stunning mockups for your approval" },
        { title: "Development", desc: "Build your website with latest tech" },
        { title: "Launch", desc: "Go live and start growing your business" }
      ]
    },
    cta: {
      title: "Ready to Transform Your Online Presence?",
      subtitle: "Join hundreds of satisfied New Zealand businesses",
      button: "Get Your Free Quote"
    }
  },
  zh: {
    hero: {
      badge: "$199起专业网站设计",
      title: "打造精美网站，助力业务腾飞",
      subtitle: "为新西兰企业提供获奖级网站设计服务。通过专业、SEO优化的网站在竞争中脱颖而出，将访客转化为客户。",
      cta: "立即开始",
      secondary: "查看案例"
    },
    features: {
      title: "为什么选择Webmate NZ？",
      items: [
        { icon: Zap, title: "极速加载", desc: "性能优化，加载快如闪电" },
        { icon: Search, title: "SEO优化", desc: "从第一天起就能在谷歌排名" },
        { icon: Smartphone, title: "移动优先", desc: "在任何设备上完美显示" },
        { icon: Shield, title: "安全可靠", desc: "企业级安全保护" },
        { icon: Palette, title: "定制设计", desc: "为您的品牌量身定制" },
        { icon: TrendingUp, title: "转化率优化", desc: "将访客转化为客户" }
      ]
    },
    pricing: {
      title: "灵活定价，满足各类企业需求",
      subtitle: "$199起的专业网站服务",
      description: "每个项目都是独一无二的。我们根据您的具体需求和预算，提供量身定制的解决方案。",
      starting: "起价",
      custom: "根据您的需求定制报价",
      features: [
        "响应式移动端友好设计",
        "包含SEO优化",
        "专业定制设计",
        "安全快速的托管",
        "持续支持和维护",
        "电商功能（如需要）",
        "内容管理系统",
        "数据分析和报告工具"
      ],
      cta: "获取定制报价"
    },
    process: {
      title: "简单的4步流程",
      steps: [
        { title: "咨询", desc: "讨论您的愿景和需求" },
        { title: "设计", desc: "创建精美设计稿供您确认" },
        { title: "开发", desc: "使用最新技术构建网站" },
        { title: "上线", desc: "发布网站，开始业务增长" }
      ]
    },
    cta: {
      title: "准备好改变您的在线形象了吗？",
      subtitle: "加入数百家满意的新西兰企业",
      button: "获取免费报价"
    }
  }
};

export default function Home() {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const savedLang = localStorage.getItem('webmate-language') || 'en';
    setLanguage(savedLang);

    const handleLanguageChange = (e) => setLanguage(e.detail);
    window.addEventListener('languageChange', handleLanguageChange);
    return () => window.removeEventListener('languageChange', handleLanguageChange);
  }, []);

  const t = content[language];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#F59E0B] to-[#EF4444] text-white rounded-full mb-8 shadow-lg">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-semibold">{t.hero.badge}</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#1E3A8A] via-[#059669] to-[#1E3A8A] bg-clip-text text-transparent leading-tight">
              {t.hero.title}
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              {t.hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={createPageUrl("Contact")}>
                <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-[#1E3A8A] to-[#059669] hover:from-[#059669] hover:to-[#1E3A8A] text-white shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
                  {t.hero.cta}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to={createPageUrl("Portfolio")}>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 border-[#1E3A8A] text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white transition-all duration-300">
                  {t.hero.secondary}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#1E3A8A] to-[#059669] bg-clip-text text-transparent">
              {t.features.title}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.features.items.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50 border border-blue-100 hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#1E3A8A] to-[#059669] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#1E3A8A] to-[#059669] bg-clip-text text-transparent">
              {t.pricing.title}
            </h2>
            <p className="text-xl text-gray-600 mb-2">{t.pricing.subtitle}</p>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">{t.pricing.description}</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Main Pricing Card */}
              <div className="p-12 rounded-3xl bg-gradient-to-br from-white to-blue-50 border-2 border-blue-200 shadow-2xl">
                <div className="text-center mb-12">
                  <div className="inline-block px-6 py-2 bg-gradient-to-r from-[#F59E0B] to-[#EF4444] text-white rounded-full mb-6">
                    <span className="text-sm font-semibold">{language === 'en' ? 'FLEXIBLE PRICING' : '灵活定价'}</span>
                  </div>
                  <div className="mb-4">
                    <span className="text-gray-600 text-xl">{t.pricing.starting}</span>
                    <div className="text-7xl font-bold bg-gradient-to-r from-[#1E3A8A] to-[#059669] bg-clip-text text-transparent mt-2">
                      $199
                    </div>
                  </div>
                  <p className="text-lg text-gray-600 font-medium">
                    {t.pricing.custom}
                  </p>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                  {t.pricing.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#059669] to-[#10B981] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700 leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="text-center">
                  <Link to={createPageUrl("Contact")}>
                    <Button size="lg" className="text-lg px-12 py-6 bg-gradient-to-r from-[#1E3A8A] to-[#059669] hover:from-[#059669] hover:to-[#1E3A8A] text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                      {t.pricing.cta}
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#F59E0B] to-[#EF4444] rounded-full opacity-10 blur-3xl" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-[#1E3A8A] to-[#059669] rounded-full opacity-10 blur-3xl" />
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <div className="flex flex-wrap justify-center items-center gap-8 text-gray-600">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-[#059669]" />
                  <span>{language === 'en' ? 'Money-back Guarantee' : '退款保证'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-[#F59E0B]" />
                  <span>{language === 'en' ? '5-Star Service' : '五星服务'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-[#1E3A8A]" />
                  <span>{language === 'en' ? 'Fast Delivery' : '快速交付'}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#1E3A8A] to-[#059669] bg-clip-text text-transparent">
              {t.process.title}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {t.process.steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center relative"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1E3A8A] to-[#059669] text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4 shadow-lg">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-[#1E3A8A] to-[#059669] opacity-20" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#1E3A8A] to-[#059669] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{t.cta.title}</h2>
            <p className="text-xl mb-8 text-white/90">{t.cta.subtitle}</p>
            <Link to={createPageUrl("Contact")}>
              <Button size="lg" className="text-lg px-8 py-6 bg-white text-[#1E3A8A] hover:bg-gray-100 shadow-2xl transform hover:scale-105 transition-all duration-300">
                {t.cta.button}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
