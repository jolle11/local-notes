import moment from "moment";
import { useEffect, useState } from "react";
import styled from "styled-components";

// TOASTIFY
import { ToastContainer, toast } from "react-toastify";
import { toastOptions } from "./config/ToastOptions";
import "react-toastify/dist/ReactToastify.css";

// COMPONENTS
import { Footer, Note } from "./components";

function App() {
	const [text, setText] = useState("");
	const [notes, setNotes] = useState([]);

	// GET NOTES FROM LOCALSTORAGE
	useEffect(() => {
		if (localStorage.getItem("LocalNotes")) {
			const storageNotes = JSON.parse(localStorage.getItem("LocalNotes"));
			setNotes(storageNotes);
		}
	}, []);

	const handleChange = (e) => {
		setText(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (text.trim() === "") {
			toast("Cannot save empty notes 🤷🏼‍♂️", toastOptions);
			return;
		}

		const newNote = {
			id: Date.now(),
			date: moment().format("llll"),
			text: text,
		};
		const updatedNotes = [...notes, newNote];
		setNotes(updatedNotes);
		localStorage.setItem("LocalNotes", JSON.stringify(updatedNotes));
		setText("");
	};
	const handleClearAll = (e) => {
		e.preventDefault();
		if (localStorage.getItem("LocalNotes")) {
			setNotes([]);
			localStorage.removeItem("LocalNotes");
			toast("All notes cleared 🧹", toastOptions);
		} else {
			toast("Nothing to clear 😅", toastOptions);
		}
	};

	const copyText = (text) => {
		navigator.clipboard.writeText(text);
		toast("Note copied to clipboard 📋", toastOptions);
	};

	const deleteNote = (id) => {
		const updatedNotes = notes.filter((note) => note.id !== id);
		localStorage.setItem("LocalNotes", JSON.stringify([...updatedNotes]));
		setNotes(updatedNotes);
		toast("Note deleted 🗑", toastOptions);
	};

	return (
		<Container>
			<div className="notes">
				<div>
					<h1 className="notes__title">Local Notes</h1>
					<form className="notes__form">
						<textarea
							type="text"
							className="notes__input"
							name="text"
							placeholder="Start writing notes"
							value={text}
							onChange={handleChange}
						/>
						<button
							type="button"
							className="notes__btn notes__btn--save"
							onClick={handleSubmit}
						>
							Save note
						</button>
						<button
							type="button"
							className="notes__btn notes__btn--clear"
							onClick={handleClearAll}
						>
							Clear all
						</button>
					</form>
					{notes.length > 0 && (
						<div className="notes__list">
							{notes.map((note) => (
								<Note
									note={note}
									key={note.id}
									onClickDelete={deleteNote}
									onClickCopy={copyText}
								/>
							))}
						</div>
					)}
				</div>
				<Footer />
			</div>
			<ToastContainer />
		</Container>
	);
}

export default App;

const Container = styled.div`
    .notes {
        height: 100vh;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        &__title {
            margin: 50px auto;
            width: auto;
            text-align: center;
            font-size: 40px;
            @media (min-width: 768px) {
                font-size: 50px;
            }
        }
        &__form {
        }
        &__input {
            width: 80vw;
            height: 100px;
            display: block;
            margin: 0;
            border: 0;
            padding: 10px;
            border-radius: 10px 10px 0 0;

            @media (min-width: 768px) {
                width: 70vw;
            }
            @media (min-width: 1200px) {
                width: 60vw;
            }
            @media (min-width: 1500px) {
                width: 50vw;
            }
        }
        &__btn {
            width: 50%;
            height: 40px;
            border: none;
            font-size: 16px;
            transition: all 0.2s ease;
            &:hover {
                background: #595959;
                color: #fff;
                cursor: pointer;
            }
            &--save {
                border-radius: 0 0 0 10px;
            }
            &--clear {
                border-radius: 0 0 10px 0;
            }
            @media (min-width: 768px) {
                font-size: 20px;
            }
        }
        &__list {
            display: flex;
            flex-direction: column-reverse;
            flex-wrap: wrap;
            width: 80vw;
            padding-bottom: 30px;
            @media (min-width: 768px) {
                width: 70vw;
            }
            @media (min-width: 1200px) {
                width: 60vw;
            }
            @media (min-width: 1500px) {
                width: 50vw;
            }
        }
    }
`;
