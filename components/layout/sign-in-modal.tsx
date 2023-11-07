import { UserAuthForm } from "@/components/UserAuthForm";
import Modal from "@/components/shared/modal";
import Image from "next/image";
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
  useState,
} from "react";

const SignInModal = ({
  showSignInModal,
  setShowSignInModal,
}: {
  showSignInModal: boolean;
  setShowSignInModal: Dispatch<SetStateAction<boolean>>;
}) => {
  const [signInClicked, setSignInClicked] = useState(false);

  return (
    <Modal showModal={showSignInModal} setShowModal={setShowSignInModal}>
      <div className="w-full overflow-hidden shadow-xl md:max-w-md md:rounded-2xl md:border md:border-gray-200">
        <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-center md:px-16">
          <a href="https://nextjs.weijunext.com">
            <Image
              src="/logo.svg"
              alt="Logo"
              className="h-10 w-10 rounded-full"
              width={20}
              height={20}
            />
          </a>
          <h3 className="font-display text-2xl font-bold">Sign In</h3>
          {/* 数据库资源不足，登录功能将跳转到SmartExcel.cc体验，你也可以依据自己的数据库在站内进行测试 */}
          {/* Due to insufficient database resources, the login feature will redirect to another one of my projects for the experience. You can also conduct tests within the site based on your own database. */}
          {/* <p className="text-sm text-gray-500">
            This is strictly for demo purposes - only your github username and
            avatar will be stored.
          </p> */}
          <p className="text-sm text-gray-500">
            Due to insufficient database resources, the login feature will
            redirect to SmartExcel.cc for the experience.
          </p>
          <p className="text-sm text-gray-500">
            You can also conduct tests within the site based on your own
            database.
          </p>
        </div>

        <div className="flex flex-col space-y-4 bg-gray-50 px-4 py-8 md:px-16">
          <UserAuthForm />
        </div>
      </div>
    </Modal>
  );
};

export function useSignInModal() {
  const [showSignInModal, setShowSignInModal] = useState(false);

  const SignInModalCallback = useCallback(() => {
    return (
      <SignInModal
        showSignInModal={showSignInModal}
        setShowSignInModal={setShowSignInModal}
      />
    );
  }, [showSignInModal, setShowSignInModal]);

  return useMemo(
    () => ({ setShowSignInModal, SignInModal: SignInModalCallback }),
    [setShowSignInModal, SignInModalCallback]
  );
}
