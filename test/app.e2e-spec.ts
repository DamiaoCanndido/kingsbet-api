import { INestApplication, ValidationPipe } from "@nestjs/common";
import * as pactum from "pactum";
import { Test } from "@nestjs/testing";
import { PrismaService } from "../src/prisma/prisma.service";
import { AppModule } from "../src/app.module";
import { SignUpDTO, SignInDTO } from "../src/auth/dto";

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
    await app.listen(3333);

    prisma = app.get(PrismaService);
    await prisma.cleanDB();
    pactum.request.setBaseUrl('http://localhost:3333/');
  })

  afterAll(() => {
    app.close();
  })
  
  describe("Auth", () => {
    describe("SignUp", () => {
      const dto: SignUpDTO = {
        name: "Tyr",
        email: "tyr@gmail.com",
        password: "123456",
        confirmPassword: "123456"
      }

      it("Should signup", () => {
        return pactum
          .spec()
          .post('auth/signup')
          .withBody(dto)
          .expectStatus(201)
      })

      it("Should throw email is empty", () => {
        return pactum
          .spec()
          .post('auth/signup')
          .withBody({
            password: dto.password
          })
          .expectStatus(400)
      })

      it("Should throw password is empty", () => {
        return pactum
          .spec()
          .post('auth/signup')
          .withBody({
            email: dto.email
          })
          .expectStatus(400)
      })

      it("Should throw no body provided", () => {
        return pactum
          .spec()
          .post('auth/signup')
          .expectStatus(400)
      })

      it("Should throw email is invalid", () => {
        return pactum
          .spec()
          .post('auth/signup')
          .withBody({
            email: "tyr@com"
          })
          .expectStatus(400)
      })
    });

    describe("SignIn", () => {
      const dto: SignInDTO = {
        email: "tyr@gmail.com",
        password: "123456",
      } 

      it("Should signin", () => {
        return pactum
          .spec()
          .post('auth/signin')
          .withBody(dto)
          .expectStatus(201)
          .stores('userAt', 'access_token')
      })

      it("Should throw email is empty", () => {
        return pactum
          .spec()
          .post('auth/signin')
          .withBody({
            password: dto.password
          })
          .expectStatus(400)
      })

      it("Should throw password is empty", () => {
        return pactum
          .spec()
          .post('auth/signin')
          .withBody({
            email: dto.email
          })
          .expectStatus(400)
      })

      it("Should throw no body provided", () => {
        return pactum
          .spec()
          .post('auth/signin')
          .expectStatus(400)
      })

      it("Should throw email is invalid", () => {
        return pactum
          .spec()
          .post('auth/signin')
          .withBody({
            email: "tyr@com"
          })
          .expectStatus(400)
      })
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