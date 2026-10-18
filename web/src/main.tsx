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
import TimerGraphicBoxing from './pages/timer_graphic_boxing.tsx';
import TimerControlBoxing from './pages/timer_control_boxing.tsx';

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
    path: "/timer_boxing",
    element: <TimerGraphicBoxing/>,
  },
  {
    path: "/timer_control_boxing",
    element: <TimerControlBoxing/>,
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