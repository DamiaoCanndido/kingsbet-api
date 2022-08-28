import { INestApplication, ValidationPipe } from "@nestjs/common";
import { Test } from "@nestjs/testing";
import { PrismaService } from "../src/prisma/prisma.service";
import { AppModule } from "../src/app.module";

describe('App e2e', () => {
  let app: INestApplication
  let prisma: PrismaService

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule]
    }).compile()

    app = moduleRef.createNestApplication()
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
      })
    );
    await app.init();

    prisma = app.get(PrismaService);
    await prisma.cleanDB();
  })

  afterAll(() => {
    app.close();
  })
  
  describe("Auth", () => {
    describe("SignUp", () => {
      it.todo("Should signup")
    });
    describe("SignIn", () => {
      it.todo("Should signin")
    });
  });

  describe("User", () => {
    describe("Get me", () => {});
    describe("Edit user", () => {});
  });

  describe("Team", () => {
    describe("Create Teams", () => {});
    describe("Get Teams", () => {});
    describe("Get Team by id", () => {});
    describe("Update Team", () => {});
    describe("Delete Team", () => {});
  });
})