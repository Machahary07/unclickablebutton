import { useSignal } from "@preact/signals";
// import { ilyImage } from "../static/ily.jpg";

export default function LoveButtons() {
  const message = useSignal("");
  const hearts = useSignal<string[]>([]);
  const noText = useSignal("No");
  const noStyle = useSignal({ top: "", left: "" });

  const moveNoButton = () => {
    const maxX = globalThis.innerWidth - 100;
    const maxY = globalThis.innerHeight - 40;
    noStyle.value = {
      left: `${Math.floor(Math.random() * maxX)}px`,
      top: `${Math.floor(Math.random() * maxY)}px`,
    };
    noText.value = "😝 No? Catch me if you can!";
  };

  const showLoveMessage = () => {
    message.value = "I love you too!😍😘";
    hearts.value = Array.from({ length: 10 }, () => `${Math.random()}`);
    document.body.style.backgroundColor = "#f9a8d4";
  };

  return (
    <div class="text-center bg-white p-6 rounded-lg shadow-lg">
      <p class="text-xl mb-4">Do you love me?</p>
      <button class="bg-green-500 text-white px-4 py-2 rounded-lg" onClick={showLoveMessage}>
        Yes
      </button>
      <button
        class="bg-red-500 text-white px-4 py-2 rounded-lg absolute"
        onMouseOver={moveNoButton}
        style={noStyle.value}
      >
        {noText.value}
      </button>
      <div class="mt-4 text-2xl text-red-500">{message.value}</div>
      {message.value && <img src="/ily.jpg" alt="I love you" class="mt-4 mx-auto w-40 h-auto" />}
      {hearts.value.map((key) => (
        <img
          key={key}
          src="/red-heart-svgrepo-com.svg"
          class="absolute w-12 h-12 animate-float"
          style={{ left: `${Math.random() * 100}vw`, top: `${Math.random() * 100}vh` }}
        />
      ))}
    </div>
  );
}
