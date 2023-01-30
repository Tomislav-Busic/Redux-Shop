import React from "react";
import WhatsAppWidget from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/index.css";

export const Whatsapp = () => {
  return (
    <WhatsAppWidget
      phoneNo="919884098840"
      position="right"
      widgetWidth="300px"
      widgetWidthMobile="260px"
      autoOpen={true}
      autoOpenTimer={5000}
      messageBox={true}
      messageBoxTxt="Hi Team, is there any related service available ?"
      iconSize="40"
      iconColor="white"
      iconBgColor="tomato"
      headerIcon="https://proficientdesigners.in/wp-content/themes/pd/img/logo-new.png"
      headerIconColor="pink"
      headerTxtColor="black"
      headerBgColor="tomato"
      headerTitle="John Doe"
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
