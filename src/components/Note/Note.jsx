import styled from 'styled-components';
import { RiDeleteBin5Line } from 'react-icons/ri';

const Note = ({ note, onClick: deleteNote }) => {
    const { id, date, text } = note;
    return (
        <Container>
            <div className="note">
                <p className="note__text">{text}</p>
                <p className="note__date">Taken: {date}</p>
                <button onClick={() => deleteNote(id)} className="note__deletebtn">
                    <RiDeleteBin5Line />
                </button>
            </div>
        </Container>
    );
};

export default Note;

const Container = styled.div`
    .note {
        min-height: 75px;
        background: #fff;
        margin-top: 10px;
        border-radius: 0 0 10px 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        overflow: hidden;
        &__text {
            padding: 10px;
        }
        &__date {
            width: 100%;
            font-size: 12px;
            text-align: right;
            padding: 5px 5px 5px 0;
        }
        &__deletebtn {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 30px;
            font-size: 20px;
            width: 100%;
            border: none;
            background: #ff6f6f;
            transition: all 0.2s ease;
            &:hover {
                background: #b30000;
                color: #fff;
            }
        }
    }
`;
