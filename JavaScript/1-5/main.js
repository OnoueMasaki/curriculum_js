function juice($fruit) {
    console.log(`${$fruit}を受け取りました。ジュースにして返します`);

    return `${$fruit}ジュース`;
}

$orangejuice = juice("みかん");
console.log(`${$orangejuice}が届きました`);