import { useParams, Link } from "react-router";
import { motion } from "motion/react";
import { Calendar, User, Share2, Clock, Eye, Tag } from "lucide-react";
import { Breadcrumb, ContentCard } from "../components/shared";
import { articlesData } from "../data/articles";
import { COLORS, FONTS, SHADOWS, LAYOUT } from "../constants/theme";

export function ArticleDetailPage() {
  const { id } = useParams();
  const article = articlesData[id || "1"] || articlesData["1"];

  return (
    <div className="relative px-3 md:px-5" style={{ maxWidth: LAYOUT.maxWidth, margin: "0 auto", paddingTop: 40, paddingBottom: 40 }}>
      <Breadcrumb
        items={[
          { label: "Trang chủ", to: "/" },
          { label: article.category },
        ]}
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-2"
        >
          <article className="bg-white rounded-2xl overflow-hidden" style={{ boxShadow: SHADOWS.card }}>
            {/* Header */}
            <ArticleHeader article={article} />

            {/* Featured image */}
            <div className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px]">
              <img src={article.thumbnail} alt={article.title} className="w-full h-full object-cover" />
            </div>

            {/* Content */}
            <div className="p-4 sm:p-6 md:p-8 pt-6 sm:pt-8">
              <div
                className="article-content"
                style={{ fontFamily: FONTS.body, color: COLORS.textSecondary, lineHeight: 1.8 }}
                dangerouslySetInnerHTML={{ __html: article.content }}
              />

              {/* Share buttons */}
              <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200">
                <div className="flex items-center justify-between flex-wrap gap-3">
                  <span className="font-semibold text-gray-700">Chia sẻ bài viết:</span>
                  <button
                    className="flex items-center gap-2 px-6 py-2.5 rounded-lg text-white transition-all hover:scale-105"
                    style={{ background: "linear-gradient(135deg, #C0891F 0%, #A07419 100%)" }}
                  >
                    <Share2 className="w-4 h-4" />
                    Chia sẻ
                  </button>
                </div>
              </div>
            </div>
          </article>
        </motion.div>

        {/* Sidebar */}
        <motion.aside
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-1"
        >
          <RelatedArticlesSidebar articles={article.relatedArticles} />
        </motion.aside>
      </div>

      <ArticleContentStyles />
    </div>
  );
}

// ── Sub-components ──────────────────────────────────────

function ArticleHeader({ article }: { article: (typeof articlesData)[string] }) {
  return (
    <div className="p-4 sm:p-6 md:p-8 pb-4 sm:pb-6">
      <div className="flex items-center gap-3 mb-4">
        <span
          className="px-4 py-1.5 text-sm font-semibold rounded-full"
          style={{ background: "linear-gradient(135deg, #C41E2A 0%, #A01520 100%)", color: "white" }}
        >
          {article.category}
        </span>
      </div>

      <h1
        className="mb-4 sm:mb-6"
        style={{ fontFamily: FONTS.display, fontWeight: 700, color: COLORS.primary, lineHeight: 1.3, fontSize: "clamp(22px, 4vw, 36px)" }}
      >
        {article.title}
      </h1>

      <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-gray-600 text-sm mb-4 sm:mb-6">
        <MetaItem icon={<Calendar className="w-4 h-4" />} text={article.date} />
        <MetaItem icon={<User className="w-4 h-4" />} text={article.author} />
        <MetaItem icon={<Clock className="w-4 h-4" />} text={article.readTime} />
        <MetaItem icon={<Eye className="w-4 h-4" />} text={`${article.views.toLocaleString()} lượt xem`} />
      </div>

      {article.tags && (
        <div className="flex flex-wrap gap-2">
          {article.tags.map((tag, index) => (
            <span key={index} className="inline-flex items-center gap-1 px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-full">
              <Tag className="w-3 h-3" />
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

function MetaItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-2">
      <span style={{ color: COLORS.gold }}>{icon}</span>
      <span>{text}</span>
    </div>
  );
}

function RelatedArticlesSidebar({ articles }: { articles: { id: string; title: string; date: string }[] }) {
  return (
    <div className="bg-white rounded-2xl p-6 sticky top-8" style={{ boxShadow: SHADOWS.cardGold }}>
      <h3
        className="text-xl font-bold mb-6 pb-3 border-b-2"
        style={{ fontFamily: FONTS.display, color: COLORS.primary, borderColor: COLORS.goldAccent }}
      >
        Bài viết liên quan
      </h3>

      <div className="space-y-4">
        {articles.map((related, index) => (
          <motion.div
            key={related.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
          >
            <Link to={`/article/${related.id}`} className="block p-4 rounded-lg hover:bg-gray-50 transition-colors group">
              <h4
                className="font-semibold mb-2 group-hover:text-[#C41E2A] transition-colors"
                style={{ fontFamily: FONTS.body, fontSize: "15px", lineHeight: 1.5 }}
              >
                {related.title}
              </h4>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <Calendar className="w-3 h-3" />
                <span>{related.date}</span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function ArticleContentStyles() {
  return (
    <style>{`
      .article-content .lead {
        font-size: 1.25rem;
        font-weight: 400;
        color: #4B5563;
        margin-bottom: 2rem;
      }
      .article-content h2 {
        font-family: 'Playfair Display', serif;
        font-size: clamp(1.25rem, 3vw, 1.875rem);
        font-weight: 700;
        color: #C41E2A;
        margin-top: 2rem;
        margin-bottom: 1rem;
      }
      .article-content p {
        margin-bottom: 1.25rem;
      }
      .article-content ul, .article-content ol {
        margin-left: 1.5rem;
        margin-bottom: 1.25rem;
      }
      .article-content li {
        margin-bottom: 0.75rem;
        padding-left: 0.5rem;
      }
      .article-content blockquote {
        border-left: 4px solid #C0891F;
        padding-left: 1rem;
        margin: 1.5rem 0;
        font-style: italic;
        color: #6B7280;
        font-size: 1rem;
      }
      @media (min-width: 640px) {
        .article-content blockquote {
          padding-left: 1.5rem;
          margin: 2rem 0;
          font-size: 1.125rem;
        }
      }
    `}</style>
  );
}