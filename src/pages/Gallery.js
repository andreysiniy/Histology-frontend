import Snapshot from '../components/snapshot/Snapshot';
import {gallery} from "../helpers/snapshotsList"

const Gallery = () => {
	return (
		<main className="section">
			<div className="container">
				<h2 className="title-1">Снимки</h2>
				<ul className="snapshots">
					{gallery.map((snapshot, index) => {
						return (
							<Snapshot
								key={index}
								title={snapshot.title}
								img={snapshot.img}
								index={index}
							/>
						);
					})}
				</ul>
			</div>
		</main>
	);
};

export default Gallery;
