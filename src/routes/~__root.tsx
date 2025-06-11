// src/routes/__root.tsx
import { createRootRoute, Outlet } from '@tanstack/react-router'
import Layout from './layout'

export const Route = createRootRoute({
  component: () => (
    <>
      <Layout children={undefined} />
      <Outlet />
    </>
  ),
})