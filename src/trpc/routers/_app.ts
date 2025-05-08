
import { createTRPCRouter } from '../init';
import { berandaRouter } from '@/module/beranda/server/procedures';
export const appRouter = createTRPCRouter({
  beranda: berandaRouter
});
// export type definition of API
export type AppRouter = typeof appRouter;
