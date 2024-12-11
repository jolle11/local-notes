import { RiDeleteBin5Line, RiFileCopy2Line } from "react-icons/ri";
import styled from "styled-components";

const Note = ({ note, onClickDelete, onClickCopy }) => {
	const { id, date, text } = note;

	return (
		<Container>
			<div className="note">
				<p className="note__text">{text}</p>
				<p className="note__date">Taken: {date}</p>
				<div className="note__buttons">
					<button
						type="button"
						onClick={() => onClickDelete(id)}
						className="note__btn note__btn--delete"
					>
						<RiDeleteBin5Line />
					</button>
					<button
						type="button"
						onClick={() => onClickCopy(text)}
						className="note__btn note__btn--copy"
					>
						<RiFileCopy2Line />
					</button>
				</div>
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
        &__buttons {
            display: flex;
            flex-direction: row;
            width: 100%;
            justify-content: space-between;
        }

        &__btn {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 30px;
            font-size: 20px;
            width: 50%;
            border: none;
            &--delete {
                background: #ff6f6f;
                transition: all 0.2s ease;
                &:hover {
                    background: #b30000;
                    color: #fff;
                }
            }
            &--copy {
                background: #0aa5ff;
                transition: all 0.2s ease;
                &:hover {
                    background: #005a8f;
                    color: #fff;
                }
            }
        }
    }
`;
