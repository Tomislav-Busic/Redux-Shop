import React from "react";
import WhatsAppWidget from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/index.css";
import logo from "../../logo/LogoMakr-1306Is.png";

export const Whatsapp = () => {
  return (
    <WhatsAppWidget
      phoneNo="+385922668230"
      position="right"
      widgetWidth="300px"
      widgetWidthMobile="260px"
      autoOpen={true}
      autoOpenTimer={5000}
      messageBox={true}
      messageBoxTxt=""
      iconSize="40"
      iconColor="white"
      iconBgColor="green"
      headerIcon={logo}
      headerIconColor="pink"
      headerTxtColor="black"
      headerBgColor="green"
      headerTitle="Tomilsav Bušić"
      headerCaption="Online"
      bodyBgColor="#bbb"
      chatPersonName="Support"
      chatMessage={
        <>
          Hi there 👋 <br />
          <br /> How can I help you?
        </>
      }
      footerBgColor="#999"
      btnBgColor="yellow"
      btnTxt="Start Chat"
      btnTxtColor="black"
    />
  );
};
