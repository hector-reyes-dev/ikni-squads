import { MainLayout } from "@/components/layout/MainLayout";
import { AuthForm } from "@/components/auth/AuthForm";

const Index = () => {
  return (
    <MainLayout>
      <div className="flex min-h-[80vh] items-center justify-center">
        <AuthForm />
      </div>
    </MainLayout>
  );
};

export default Index;