import {Link} from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

export const Logo = () => {
    return (<>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </div>

            <Link to="/basic">
                <button>Go to Basic</button>
            </Link>
            <Link to="/books">
                <button>書籍リスト</button>
            </Link>
            <div>
                <Link to="/wellcome_child">
                    <button>メンバー募集中</button>
                </Link>
                <Link to="/wellcome_props">
                    <button>仲間募集中</button>
                </Link>
                <Link to="/wellcome_key">
                    <button>友達募集中</button>
                </Link>
                <div>
                    <Link to="/state">
                        <button>子から親へ</button>
                    </Link>
                    <Link to="/event">
                        <button>日時</button>
                    </Link>
                    <Link to="/propagation">
                        <button>伝播</button>
                    </Link>
                </div>
                <Link to="/fortune_telling">
                    <button>今日の運勢</button>
                </Link>
                <div>
                    <Link to="/basic_form">
                        <button>基本のフォーム</button>
                    </Link>
                    <Link to="/uc_form">
                        <button>UCフォーム</button>
                    </Link>
                </div>
                <div>
                    <Link to="/text_area">
                        <button>テキストエリア</button>
                    </Link>
                    <Link to="/form_select">
                        <button>選択ボックス</button>
                    </Link>
                    <Link to="/form_list">
                        <button>リストボックス</button>
                    </Link>
                    <Link to="/form_radio">
                        <button>ラジオボタン</button>
                    </Link>
                    <Link to="/form_check">
                        <button>チェックボタン</button>
                    </Link>
                    <Link to="/check_multi">
                        <button>マルチチェック</button>
                    </Link>
                    <Link to="/form_file">
                        <button>ファイル入力</button>
                    </Link>
                </div>
            </div>
        </>
    )
}