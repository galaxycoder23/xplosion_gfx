import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router';
import Control from './pages/lt_control.tsx';
import LowerThirdGraphic from './pages/lt_graphic.tsx';
import GraphControl from './pages/graph_control.tsx';
import GraphGraphic from './pages/graph_graphic.tsx';
import Landing from './pages/landing.tsx';
import ScoreGraphic from './pages/score_graphic.tsx';
import ScoreControl from './pages/score_control.tsx';
import LowerThirdGraphicNetball from './pages/lt_graphic_netball.tsx';
import GraphGraphicNetball from './pages/graph_graphic_netball.tsx';
import LowerThirdGraphicAmericanFootball from './pages/lt_graphic_american_football.tsx';
import GraphGraphicAmericanFootball from './pages/graph_graphic_american_football.tsx';
import ScoreGraphicBoxing from './pages/score_graphic_boxing.tsx';
import ScoreControlBoxing from './pages/score_control_boxing.tsx';

const router = createBrowserRouter([

  {
    path: "/lt_control",
    element: <Control/>,
  },
  {
    path: "/lt",
    element: <LowerThirdGraphic/>,
  },
  {
    path: "/lt_netball",
    element: <LowerThirdGraphicNetball/>,
  },
    {
    path: "/lt_american_football",
    element: <LowerThirdGraphicAmericanFootball/>,
  },
  {
    path: "/graph_control",
    element: <GraphControl/>,
  },

  {
    path: "/graph",
    element: <GraphGraphic/>,
  },  
  {
    path: "/graph_netball",
    element: <GraphGraphicNetball/>,
  },  
    {
    path: "/graph_american_football",
    element: <GraphGraphicAmericanFootball/>,
  },  
  {
    path: "/score",
    element: <ScoreGraphic/>,
  },
  {
    path: "/score_control",
    element: <ScoreControl/>,
  },
  {
    path: "/score_boxing",
    element: <ScoreGraphicBoxing/>,
  },
  {
    path: "/score_control_boxing",
    element: <ScoreControlBoxing/>,
  },
  {
    path: "*",
    element: <Landing/>,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)