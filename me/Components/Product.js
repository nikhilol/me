import styles from '../styles/Home.module.css'
export default function Product(props) {
	return (
		<div
			style={{
				overflow: "hidden",
				objectFit: "cover",
				objectPosition: "center",
				position: "relative",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}
			className={styles.product}
		>
			<img className={styles.ProductImg} style={{ position: "absolute" }} src={props.img}></img>
			<h3 style={{ position: "absolute", zIndex: 80, width: "100%", textAlign: "center" }}>
				{props.title}
			</h3>
		</div>
	);
}
