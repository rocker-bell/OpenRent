import "../Styles/Blog.css";

export default function Blog() {
    return (
        <div className="blog">
            <header className="blog-header">
                <div className="container">
                    <h1>Blog</h1>
                    <p>Stay updated with the latest in decentralized renting</p>
                </div>
            </header>

            <section className="blog-content">
                <div className="container">
                    <div className="blog-grid">
                        <article className="blog-post">
                            <div className="post-image">
                                <div className="placeholder-image">
                                    <span className="image-icon">🤖</span>
                                </div>
                            </div>
                            <div className="post-content">
                                <div className="post-meta">
                                    <span className="post-date">Jan 15, 2024</span>
                                    <span className="post-category">AI Technology</span>
                                </div>
                                <h2>How AI is Transforming the Renting Industry</h2>
                                <p>
                                    Artificial intelligence is revolutionizing how we rent services, making 
                                    processes more efficient and accessible than ever before.
                                </p>
                                <a href="#" className="read-more">Read More →</a>
                            </div>
                        </article>

                        <article className="blog-post">
                            <div className="post-image">
                                <div className="placeholder-image">
                                    <span className="image-icon">⛓️</span>
                                </div>
                            </div>
                            <div className="post-content">
                                <div className="post-meta">
                                    <span className="post-date">Jan 10, 2024</span>
                                    <span className="post-category">Blockchain</span>
                                </div>
                                <h2>The Future of Decentralized Rent Services</h2>
                                <p>
                                    Discover how blockchain technology is reshaping the renting industry 
                                    with transparent, secure transactions.
                                </p>
                                <a href="#" className="read-more">Read More →</a>
                            </div>
                        </article>

                        <article className="blog-post">
                            <div className="post-image">
                                <div className="placeholder-image">
                                    <span className="image-icon">💰</span>
                                </div>
                            </div>
                            <div className="post-content">
                                <div className="post-meta">
                                    <span className="post-date">Jan 5, 2024</span>
                                    <span className="post-category">Business</span>
                                </div>
                                <h2>Cost-Effective Solutions for Small Businesses</h2>
                                <p>
                                    Learn how decentralized renting platforms are helping small businesses 
                                    access professional services at affordable rates.
                                </p>
                                <a href="#" className="read-more">Read More →</a>
                            </div>
                        </article>

                        <article className="blog-post">
                            <div className="post-image">
                                <div className="placeholder-image">
                                    <span className="image-icon">🔒</span>
                                </div>
                            </div>
                            <div className="post-content">
                                <div className="post-meta">
                                    <span className="post-date">Jan 1, 2024</span>
                                    <span className="post-category">Security</span>
                                </div>
                                <h2>Security in Decentralized Transactions</h2>
                                <p>
                                    Explore the security measures that make decentralized renting platforms 
                                    a safe choice for your business needs.
                                </p>
                                <a href="#" className="read-more">Read More →</a>
                            </div>
                        </article>

                        <article className="blog-post">
                            <div className="post-image">
                                <div className="placeholder-image">
                                    <span className="image-icon">⚡</span>
                                </div>
                            </div>
                            <div className="post-content">
                                <div className="post-meta">
                                    <span className="post-date">Dec 28, 2023</span>
                                    <span className="post-category">Technology</span>
                                </div>
                                <h2>Rapid Development with Automation Tools</h2>
                                <p>
                                    See how automation tools like Selenium and Puppeteer are 
                                    accelerating task execution on decentralized platforms.
                                </p>
                                <a href="#" className="read-more">Read More →</a>
                            </div>
                        </article>

                        <article className="blog-post">
                            <div className="post-image">
                                <div className="placeholder-image">
                                    <span className="image-icon">🌐</span>
                                </div>
                            </div>
                            <div className="post-content">
                                <div className="post-meta">
                                    <span className="post-date">Dec 25, 2023</span>
                                    <span className="post-category">Global Access</span>
                                </div>
                                <h2>Globalizing Rent Services Through Decentralization</h2>
                                <p>
                                    How blockchain technology is breaking down geographical barriers 
                                    in the renting industry.
                                </p>
                                <a href="#" className="read-more">Read More →</a>
                            </div>
                        </article>
                    </div>

                    <div className="pagination">
                        <button className="btn-secondary">Previous</button>
                        <button className="btn-primary active">1</button>
                        <button className="btn-secondary">2</button>
                        <button className="btn-secondary">3</button>
                        <button className="btn-secondary">Next</button>
                    </div>
                </div>
            </section>

            <footer className="blog-footer">
                <div className="container">
                    <p>&copy; 2024 OpenRent. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
