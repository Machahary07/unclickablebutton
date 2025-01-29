import { h } from "preact";

const LinkButton = ({ href }: { href: string }) => {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer" style={styles.link}>
            <button style={styles.button}>
                Source Code
                <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" style={styles.icon} />
            </button>
        </a>
    );
};

const styles = {
    link: {
        textDecoration: 'none',
    },
    button: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10px 20px',
        fontSize: '16px',
        fontWeight: 'bold',
        color: '#fff',
        backgroundColor: '#333',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        position: 'relative' as 'relative',
    },
    icon: {
        width: '20px',
        height: '20px',
        marginLeft: '10px',
        position: 'absolute' as 'absolute',
        bottom: '5px',
        right: '5px',
    },
};

export default LinkButton;