import { Module } from "@nestjs/common";
import { RenderModule } from "nest-next";
import Next from "next";
import { AppController } from "./app.controller";
import { BlogController } from "./blog/blog.controller";
import { BlogModule } from "./blog/blog.module";
import { BlogService } from "./blog/blog.service";
import { UserModule } from "./user/user.module";

@Module({
  imports: [
    RenderModule.forRootAsync(
      Next({
        dev: process.env.NODE_ENV !== "production",
        // conf: { useFilesystemPublicRoutes: false },
      })
    ),
    UserModule, BlogModule
  ],
  controllers: [AppController],
})
export class AppModule {}
