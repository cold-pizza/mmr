export default function LandingPage() {
    const days = "07/20";
    const notification = `auth0 google API 연동
    router 활성화
    prisma mysql 연결
    fixel font 변경
    어 제가 해야할겁니다..`;
    const intro = `안녕하세요. 개발자입니다.😊 이 사이트는 질문자의 익명성을 보장하는 사이트 입니다.
    평소에 하고 싶었던 질문들을 하는 특별한 시간이 되길 바랍니다.`;
    return (
        <div className="max-w-screen-sm w-full">
            <div className="mb-8">
                <h1 className="sr-only">무무르</h1>
                <h2 className="font-bold text-4xl">
                    무엇이든 물어보세요! 무무르😋
                </h2>
            </div>
            <ul className="flex flex-col items-start space-y-2 mb-8">
                <p className="font-bold text-2xl tracking-[0.3rem]">공지사항</p>
                <li className="text-lg">[{days}]</li>
                <li className="leading-8">{notification}</li>
            </ul>
            <span className="text-lg">{intro}</span>
        </div>
    );
}
