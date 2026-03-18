import { createBrowserRouter } from "react-router";
import { MainLayout } from "./layouts/MainLayout";
import { HomePage } from "./pages/HomePage";
import { ArticleDetailPage } from "./pages/ArticleDetailPage";
import { LeaderDetailPage } from "./pages/LeaderDetailPage";
import { IntroductionPage } from "./pages/IntroductionPage";
import { NewsActivitiesPage } from "./pages/NewsActivitiesPage";
import { DocumentsPage } from "./pages/DocumentsPage";
import { PartyBuildingPage } from "./pages/PartyBuildingPage";
import { Resolution57Page } from "./pages/Resolution57Page";
import { NotFoundPage } from "./pages/NotFoundPage";
import { VideoDetailPage } from "./pages/VideoDetailPage";
import { GalleryDetailPage } from "./pages/GalleryDetailPage";
import { DocumentDetailPage } from "./pages/DocumentDetailPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "gioi-thieu", Component: IntroductionPage },
      { path: "tin-tuc", Component: NewsActivitiesPage },
      { path: "van-ban", Component: DocumentsPage },
      { path: "xay-dung-dang", Component: PartyBuildingPage },
      { path: "nghi-quyet-57", Component: Resolution57Page },
      { path: "article/:id", Component: ArticleDetailPage },
      { path: "leader/:id", Component: LeaderDetailPage },
      { path: "video/:id", Component: VideoDetailPage },
      { path: "gallery/:id", Component: GalleryDetailPage },
      { path: "document/:id", Component: DocumentDetailPage },
      { path: "*", Component: NotFoundPage },
    ],
  },
]);