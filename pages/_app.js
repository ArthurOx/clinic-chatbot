import ChatbotPage from "../components/chatbot";

// We import our CSS here because Next.js takes care of rendering it for us
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "../styles.css";



// This is the entrypoint to our app - all our code and logic is "within" its scope
export default function App({ Component, pageProps }) {
    return (
        <div>
            <div>
                <ChatbotPage {...pageProps} />
            </div>
            <div id="bottom-of-chat"></div>
        </div>
    )
}
