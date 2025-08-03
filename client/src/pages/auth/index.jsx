import Background from "@/assets/login2.png";
import IconImage from "@/assets/chat-chat-svgrepo-com.png";


import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleLogin = async () => {};
  const handleSignUp = async () => {};

  return (
    <div className="h-[100vh] w-[100vw] flex justify-center items-center">
      <div className="h-[80vh] bg-white border-2 border-white text-opacity-90 shadow-2xl w-[90vw] md:w-[80vw] lg:w-[70vw] xl:w-[60vw] rounded grid xl:grid-cols-2">
        <div className="flex flex-col gap-10 items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center">
              <h1 className="text-4xl font-medium p-5 font-mono ">WELCOME </h1>
              <img src={IconImage} alt="Icon" className="h-[80px]"/>
    
            </div>
            <p className="font-medium text-center font-stretch-expanded">
              Fill in the details to get started with the Chat App
            </p>
          </div>

          <div className="flex items-center justify-center w-full">
            <Tabs className="w-3/4" defaultValue="login">
              <TabsList className="bg-transparent rounded-none w-full flex flex-wrap">
                <TabsTrigger
                  value="login"
                  className="data-[state=active]:bg-transparent text-black text-opacity-90 border-b-2 rounded-none w-full 
                               data-[state=active]:text-black data-[state=active]:font-semibold 
                               data-[state=active]:border-b-purple-500 p-3 transition-all duration-300"
                >
                  Login
                </TabsTrigger>
                <TabsTrigger
                  value="signup"
                  className="data-[state=active]:bg-transparent text-black text-opacity-90 border-b-2 rounded-none w-full 
                               data-[state=active]:text-black data-[state=active]:font-semibold 
                               data-[state=active]:border-b-purple-500 p-3 transition-all duration-300"
                >
                  Sign Up
                </TabsTrigger>
              </TabsList>

              <TabsContent value="login" className="flex flex-col gap-5 ">
                <Input
                  placeholder="Email"
                  type="email"
                  className="rounded-full p-6 "
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                  placeholder="Password"
                  type="password"
                  className="rounded-full p-6"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                  classname="
                                rounded-full 
                                p-6"
                  onClick={handleLogin}
                >
                  Login
                </Button>
              </TabsContent>

              <TabsContent value="signup" className="flex flex-col gap-5 mt-10">
                <Input
                  placeholder="Email"
                  type="email"
                  className="rounded-full p-6"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                  placeholder="Password"
                  type="password"
                  className="rounded-full p-6"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Input
                  placeholder="Confirm Password"
                  type="password"
                  className="rounded-full p-6"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <Button
                  classname="
                                rounded-full 
                                p-6"
                  onClick={handleSignUp}
                >
                  Sign Up
                </Button>
              </TabsContent>
            </Tabs>
          </div>
        </div>
        <div className="hidden xl:flex justify-center items-center ">
          <img src={Background} alt="login background" className="h-[600px]" />
        </div>
      </div>
    </div>
    
  );
}

export default Auth;
