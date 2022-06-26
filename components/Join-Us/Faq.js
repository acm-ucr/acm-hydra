import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Container } from "react-bootstrap";
import styles from "./Faq.module.css";

const Faq = () => {
	return (
		<div className={styles.joinusFaqContainer}>
			<div className={styles.joinusFaqWrapper}>
				<p className={styles.joinusFaqHeader}>
					Frequently Asked Questions
				</p>

				<Container
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						flexDirection: "column",
					}}
				>
					<Accordion>
						<Accordion.Item eventKey='0'>
							<Accordion.Header>
								<p className={styles.joinusFaqQuestion}>
									How can I join ACM?
								</p>
							</Accordion.Header>
							<Accordion.Body className={styles.joinusFaqAnswer}>
								<p>Great Question!You Don&apos;t!</p>
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey='1'>
							<Accordion.Header>
								<p className={styles.joinusFaqQuestion}>
									How can I join ACM?
								</p>
							</Accordion.Header>
							<Accordion.Body className={styles.joinusFaqAnswer}>
								<p>Great Question!You Don&apos;t!</p>
							</Accordion.Body>
						</Accordion.Item>
					</Accordion>
				</Container>
			</div>
		</div>
	);
};

export default Faq;
