let images = []; // 画像を格納する配列
let correctAnswers = ["potato", "carrot", "apple", "tomato", "orange", "peach", "melon", "corn", "onion", "banana"]; // 正しい答えの配列
let currentQuestion = 0; // 現在の問題番号
let input;
let userAnswer = "";
let message1 = "この食べ物は何でしょう?"; // 質問
let message2 = "What is this food?"; // 質問

let resultMessage = ""; // 結果メッセージ
let isFinished = false; // クイズ終了フラグ
let startTime; // クイズ開始時間
let timer = 0; // タイマー
let isStarted = false; // クイズ開始フラグ
let startButton; // スタートボタンの参照
let checkButton; // チェックボタンの参照

function preload() {
  // 画像をロードして配列に保存
  images[0] = loadImage('https://raw.githubusercontent.com/Terapittan1241/typing/main/a.png'); // apple
  images[1] = loadImage('https://raw.githubusercontent.com/Terapittan1241/typing/main/b.jpg'); // banana
  images[2] = loadImage('https://raw.githubusercontent.com/Terapittan1241/typing/main/c.jpg'); // grape
  images[3] = loadImage('https://raw.githubusercontent.com/Terapittan1241/typing/main/d.png'); // orange
  images[4] = loadImage('https://raw.githubusercontent.com/Terapittan1241/typing/main/e.jpg'); // egg
  images[5] = loadImage('https://raw.githubusercontent.com/Terapittan1241/typing/main/f.png'); // peach
  images[6] = loadImage('https://raw.githubusercontent.com/Terapittan1241/typing/main/g.png'); // melon
  images[7] = loadImage('https://raw.githubusercontent.com/Terapittan1241/typing/main/h.jpg'); // corn
  images[8] = loadImage('https://raw.githubusercontent.com/Terapittan1241/typing/main/i.jpg'); // onion
  images[9] = loadImage('https://raw.githubusercontent.com/Terapittan1241/typing/main/j.jpg'); // banana
}

function setup() {
  createCanvas(400, 400);

  // スタートボタンを作成
  startButton = createButton('Start');
  startButton.position(150, 350);
  startButton.style('font-size', '20px');
  startButton.style('padding', '10px 20px');
  startButton.mousePressed(startQuiz);

  // テキスト入力フィールドを作成
  input = createInput();
  input.position(100, 320);
  input.size(180, 40);
  input.style('font-size', '20px');
  input.hide();

  // 答えをチェックするボタンを作成
  checkButton = createButton('Check Answer');
  checkButton.position(input.x + input.width + 20, 320);
  checkButton.style('font-size', '20px');
  checkButton.style('padding', '10px 20px');
  checkButton.mousePressed(checkAnswer);
  checkButton.hide();
}

function draw() {
  background(255);

  // タイマーを表示
  if (isStarted && !isFinished) {
    timer = floor((millis() - startTime) / 1000); // 秒単位で経過時間を計算
    textSize(24);
    fill(0);
    text("Timer: " + timer + "s", 150, 310);
  }

  // クイズが終了した場合
  if (isFinished) {
    textSize(50);
    fill(0);
    textAlign(CENTER, CENTER);
    text("Finish", width / 2, height / 2);
    textSize(24);
    text("Total Time: " + timer + " seconds", width / 2, height / 2 + 60);
  } else if (isStarted) {
    // 現在の問題の画像を表示
    if (images[currentQuestion]) {
      image(images[currentQuestion], 100, 80, 190, 190);
    }

    // 質問メッセージを表示
    textSize(24);
    fill(0);
    text(message1, 100, 35);
    textSize(19);
    text(message2, 100, 65);

    // 結果メッセージを表示
    textSize(20);
    fill(0);
    text(resultMessage, 100, 385);
  }
}

function checkAnswer() {
  // ユーザーの入力を取得して小文字に変換
  userAnswer = input.value().toLowerCase();

  // 答えが正しいかどうかをチェック
  if (userAnswer === correctAnswers[currentQuestion]) {
    resultMessage = "正解　すごいね！";
    currentQuestion++;
    input.value(''); // 入力フィールドをクリア

    // すべての問題が終了したら
    if (currentQuestion >= correctAnswers.length) {
      isFinished = true; // クイズ終了フラグをセット
      input.hide();
      checkButton.hide();
    }
  } else {
    resultMessage = "Try again!　もう一度チャレンジしよう！";
  }
}

function startQuiz() {
  isStarted = true;
  startTime = millis();
  input.show();
  checkButton.show();
  startButton.hide();
}
