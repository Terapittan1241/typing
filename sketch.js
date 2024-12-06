let imagesLevel1 = []; // レベル1の画像を格納する配列
let imagesLevel2 = []; // レベル2の画像を格納する配列
let imagesLevel3 = []; // レベル3の画像を格納する配列
let correctAnswersLevel1 = ["potato", "carrot", "apple", "tomato", "orange","peach","melon","corn","onion","banana"]; // レベル1の正しい答えの配列
let correctAnswersLevel2 = ["cherry", "sausage", "pineapple", "grapes", "strawberry", "mushroom", "cabbage"]; // レベル2の正しい答えの配列
let correctAnswersLevel3 = ["persimmon", "spinach", "eggplant", "water melon", "japanese pear", "cucumber", "green pepper", "kiwi fruit"]; // レベル3の正しい答えの配列
let currentQuestion = 0; // 現在の問題番号
let input;
let userAnswer = "";
let message1 = "この食べ物は何でしょう?"; // 質問
let message2 = "What is this food?"; // 質問
let resultMessage = ""; // 結果メッセージ
let isFinished = false; // クイズ終了フラグ
let startTime; // クイズ開始時間
let timerLevel1 = 0; // レベル1用タイマー
let timerLevel2 = 0; // レベル2用タイマー
let timerLevel3 = 0; // レベル3用タイマー
let isStarted = false; // クイズ開始フラグ
let isLevel2 = false; // レベル2のフラグ
let isLevel3 = false; // レベル3のフラグ
let showTitle = true; // タイトル表示フラグ
let startLevel1Button; // レベル1スタートボタンの参照
let startLevel2Button; // レベル2スタートボタンの参照
let startLevel3Button; // レベル3スタートボタンの参照
let checkButton; // チェックボタンの参照
let replayButton; // もう一度プレイボタンの参照

function preload() {
  // レベル1の画像をロードして配列に保存
  imagesLevel1[0] = loadImage('https://raw.githubusercontent.com/Terapittan1241/typing/main/a.png'); // apple
  imagesLevel1[1] = loadImage('https://raw.githubusercontent.com/Terapittan1241/typing/main/b.jpg'); // banana
  imagesLevel1[2] = loadImage('https://raw.githubusercontent.com/Terapittan1241/typing/main/c.jpg'); // grape
  imagesLevel1[3] = loadImage('https://raw.githubusercontent.com/Terapittan1241/typing/main/d.png'); // orange
  imagesLevel1[4] = loadImage('https://raw.githubusercontent.com/Terapittan1241/typing/main/e.jpg'); // egg
  imagesLevel1[5] = loadImage('https://raw.githubusercontent.com/Terapittan1241/typing/main/f.png'); // apple
  imagesLevel1[6] = loadImage('https://raw.githubusercontent.com/Terapittan1241/typing/main/g.png'); // banana
  imagesLevel1[7] = loadImage('https://raw.githubusercontent.com/Terapittan1241/typing/main/h.jpg'); // grape
  imagesLevel1[8] = loadImage('https://raw.githubusercontent.com/Terapittan1241/typing/main/i.jpg'); // orange
  imagesLevel1[9] = loadImage('https://raw.githubusercontent.com/Terapittan1241/typing/main/j.jpg'); // egg
  // レベル2の画像をロードして配列に保存
  imagesLevel2[0] = loadImage('https://raw.githubusercontent.com/Terapittan1241/typing/main/k.jpg'); // broccoli
  imagesLevel2[1] = loadImage('https://raw.githubusercontent.com/Terapittan1241/typing/main/l.jpg'); // cucumber
  imagesLevel2[2] = loadImage('https://raw.githubusercontent.com/Terapittan1241/typing/main/m1.png'); // grape
  imagesLevel2[3] = loadImage('https://raw.githubusercontent.com/Terapittan1241/typing/main/m.jpg'); // strawberry
  imagesLevel2[4] = loadImage('https://raw.githubusercontent.com/Terapittan1241/typing/main/n.jpg'); // pineapple
  imagesLevel2[5] = loadImage('https://raw.githubusercontent.com/Terapittan1241/typing/main/o.jpg'); // strawberry
  imagesLevel2[6] = loadImage('https://raw.githubusercontent.com/Terapittan1241/typing/main/p.jpg'); // pineapple

  // レベル3の画像をロードして配列に保存
  imagesLevel3[0] = loadImage('https://raw.githubusercontent.com/Terapittan1241/typing/main/q.jpg'); // kiwi
  imagesLevel3[1] = loadImage('https://raw.githubusercontent.com/Terapittan1241/typing/main/r.png'); // peach
  imagesLevel3[2] = loadImage('https://raw.githubusercontent.com/Terapittan1241/typing/main/s.jpg'); // pear
  imagesLevel3[3] = loadImage('https://raw.githubusercontent.com/Terapittan1241/typing/main/t.jpg'); // mango
  imagesLevel3[4] = loadImage('https://raw.githubusercontent.com/Terapittan1241/typing/main/u.jpg'); // watermelon
  imagesLevel3[5] = loadImage('https://raw.githubusercontent.com/Terapittan1241/typing/main/v.jpg'); // pear
  imagesLevel3[6] = loadImage('https://raw.githubusercontent.com/Terapittan1241/typing/main/w.jpg'); // mango
  imagesLevel3[7] = loadImage('https://raw.githubusercontent.com/Terapittan1241/typing/main/x.jpg'); // watermelon
}

function setup() {
  createCanvas(windowWidth, windowHeight); // フルスクリーン対応

  // レベル1スタートボタンを作成
  startLevel1Button = createButton('Start 初級');
  startLevel1Button.position(width / 2 - 150, height / 2 - 150); // 画面中央に配置
  startLevel1Button.style('font-size', '32px');
  startLevel1Button.style('padding', '20px 40px');
  startLevel1Button.style('background-color', '#28a745');
  startLevel1Button.style('color', '#ffffff');
  startLevel1Button.style('border', 'none');
  startLevel1Button.style('border-radius', '10px');
  startLevel1Button.mousePressed(() => startQuiz(1)); // レベル1を開始

  // レベル2スタートボタンを作成
  startLevel2Button = createButton('Start 中級');
  startLevel2Button.position(width / 2 - 150, height / 2 - 50); // 画面中央に配置
  startLevel2Button.style('font-size', '32px');
  startLevel2Button.style('padding', '20px 40px');
  startLevel2Button.style('background-color', '#007bff');
  startLevel2Button.style('color', '#ffffff');
  startLevel2Button.style('border', 'none');
  startLevel2Button.style('border-radius', '10px');
  startLevel2Button.mousePressed(() => startQuiz(2)); // レベル2を開始

  // レベル3スタートボタンを作成
  startLevel3Button = createButton('Start 上級');
  startLevel3Button.position(width / 2 - 150, height / 2 + 50); // 画面中央に配置
  startLevel3Button.style('font-size', '32px');
  startLevel3Button.style('padding', '20px 40px');
  startLevel3Button.style('background-color', '#ff5733');
  startLevel3Button.style('color', '#ffffff');
  startLevel3Button.style('border', 'none');
  startLevel3Button.style('border-radius', '10px');
  startLevel3Button.mousePressed(() => startQuiz(3)); // レベル3を開始

  // テキスト入力フィールド（回答欄）を作成
  input = createInput();
  input.position(width / 2 - 250, height - 250); // 位置を少し上に調整
  input.size(500,56);
  input.style('font-size', '40px'); // フォントサイズを調整
  input.hide(); // スタートするまで非表示

  // 答えをチェックするボタンを作成
  checkButton = createButton('Check Answer');
  checkButton.position(input.x + input.width + 10, height - 250); // 位置を少し上に調整
  checkButton.size(150,64);
  checkButton.style('font-size', '25px'); // フォントサイズを調整
  checkButton.mousePressed(checkAnswer); // ボタンクリックでcheckAnswer関数が呼ばれる
  checkButton.hide(); // スタートするまで非表示

  // もう一度プレイボタンを作成
  replayButton = createButton('もう一度プレイ');
  replayButton.position(width / 2 - 100, height / 2 + 160);
  replayButton.style('font-size', '28px');
  replayButton.style('padding', '10px 20px');
  replayButton.style('background-color', '#ffc107');
  replayButton.style('color', '#ffffff');
  replayButton.style('border', 'none');
  replayButton.style('border-radius', '10px');
  replayButton.mousePressed(resetQuiz); // リセット関数を呼ぶ
  replayButton.hide(); // 終了するまで非表示
}

function draw() {
  background(255);

  // タイトル「タイピングゲーム」を表示（クイズ開始前のみ）
  if (showTitle) {
    textSize(48);
    textAlign(CENTER);
    fill(0);
    text("タイピングゲーム", width / 2.1, height / 6); // タイトルを上部に表示
  }

  // レベルごとのタイマー表示
  if (isStarted && !isLevel2 && !isLevel3 && !isFinished) {
    timerLevel1 = floor((millis() - startTime) / 1000); // レベル1の経過時間
    textSize(36);
    fill(0);
    textAlign(CENTER);
    text("Timer: " + timerLevel1 + "s", width / 2, 50);
  }
  if (isStarted && isLevel2 && !isLevel3 && !isFinished) {
    timerLevel2 = floor((millis() - startTime) / 1000); // レベル2の経過時間
    textSize(36);
    fill(0);
    textAlign(CENTER);
    text("Timer: " + timerLevel2 + "s", width / 2, 50);
  }
  if (isStarted && isLevel3 && !isFinished) {
    timerLevel3 = floor((millis() - startTime) / 1000); // レベル3の経過時間
    textSize(36);
    fill(0);
    textAlign(CENTER);
    text("Timer: " + timerLevel3 + "s", width / 2, 50);
  }

  // 終了時の処理
  if (isFinished) {
    textSize(64);
    fill(0);
    textAlign(CENTER, CENTER);
    text("Finish", width / 2, height / 2);
    textSize(36);

    // タイムを表示
    if (!isLevel2 && !isLevel3) {
      text("初級 タイム: " + timerLevel1 + " 秒", width / 2, height / 2 + 80);
    } else if (isLevel2) {
      text("中級 タイム: " + timerLevel2 + " 秒", width / 2, height / 2 + 80);
    } else if (isLevel3) {
      text("上級 タイム: " + timerLevel3 + " 秒", width / 2, height / 2 + 80);
    }

    replayButton.show(); // 終了時に「もう一度プレイ」ボタンを表示
  } else if (isStarted) {
    // 現在のレベルに応じて画像を表示
    let currentImages = isLevel3 ? imagesLevel3 : isLevel2 ? imagesLevel2 : imagesLevel1;

    if (currentImages[currentQuestion]) {
      image(currentImages[currentQuestion], width / 2 - 95, height / 2 - 125, 170, 195); // 画像を画面中央に表示
    }

    // 質問メッセージを表示
    textSize(36);
    fill(0);
    textAlign(CENTER);
    text(message1, width / 2, 120);
    textSize(28);   
    text(message2, width / 2, 160);

    // 結果メッセージを表示
    textSize(32);
    fill(0);
    textAlign(CENTER);
    text(resultMessage, width / 2, height  - 100);
  }
}

function checkAnswer() {
  userAnswer = input.value().toLowerCase(); 
  let correctAnswers = isLevel3 ? correctAnswersLevel3 : isLevel2 ? correctAnswersLevel2 : correctAnswersLevel1;

  if (userAnswer === correctAnswers[currentQuestion]) {
    resultMessage = "　 　　 正解　やったね！";
    currentQuestion++; // 次の問題に進む
    input.value(''); // 入力フィールドをクリア

    // 各レベル終了判定
    if (!isLevel2 && !isLevel3 && currentQuestion >= correctAnswersLevel1.length) {
      resultMessage = "初級クリア！";
      isFinished = true; // レベル1終了
      input.hide(); // 回答欄を非表示
      checkButton.hide(); // チェックボタンを非表示
    }
    if (isLevel2 && currentQuestion >= correctAnswersLevel2.length) {
      resultMessage = "中級クリア！";
      isFinished = true; // レベル2終了
      input.hide(); 
      checkButton.hide(); 
    }
    if (isLevel3 && currentQuestion >= correctAnswersLevel3.length) {
      resultMessage = "上級クリア！";
      isFinished = true; 
      input.hide(); 
      checkButton.hide(); 
    }
  } else {
    resultMessage = "Try again!　もう一度チャレンジ！";
  }
}

function startQuiz(level) {
  startLevel1Button.hide();
  startLevel2Button.hide();
  startLevel3Button.hide();

  // タイトルを非表示にする
  showTitle = false;

  if (level === 1) {
    isLevel2 = false;
    isLevel3 = false; 
  } else if (level === 2) {
    isLevel2 = true;
    isLevel3 = false; 
  } else if (level === 3) {
    isLevel2 = false;
    isLevel3 = true; 
  }

  isStarted = true;
  isFinished = false; 
  startTime = millis(); 
  currentQuestion = 0; 
  input.show(); 
  checkButton.show(); 
  resultMessage = ""; 
  replayButton.hide(); // プレイ中は「もう一度プレイ」ボタンを非表示
}

function resetQuiz() {
  isStarted = false;
  isFinished = false;
  currentQuestion = 0; // 最初の問題に戻す
  timerLevel1 = 0;
  timerLevel2 = 0;
  timerLevel3 = 0;
  resultMessage = "";

  // テキスト位置のリセットを確実にするため、テキスト設定をリセット
  textAlign(LEFT);

  // タイトルを再表示する
  showTitle = true;
  
  // スタート画面に戻す
  startLevel1Button.show();
  startLevel2Button.show();
  startLevel3Button.show();
  
  // 入力フィールドやボタンを非表示にする
  input.hide();
  checkButton.hide();
  replayButton.hide(); 
}

// ウィンドウサイズが変更された時にキャンバスのサイズを更新する
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  // 各ボタンの位置を中央に再調整
  startLevel1Button.position(width / 2 - 150, height / 2 - 150);
  startLevel2Button.position(width / 2 - 150, height / 2 - 50);
  startLevel3Button.position(width / 2 - 150, height / 2 + 50);
  input.position(width / 2 - 250, height - 250); // 入力欄を少し上に調整
  checkButton.position(input.x + input.width + 10, height - 250); // チェックボタンの位置も調整
  replayButton.position(width / 2 - 100, height / 2 + 100);
}
