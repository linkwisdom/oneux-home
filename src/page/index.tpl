<div class="page index-page">
    <header id="header">
        <h1 class="logo">
            <div class="oneux">ONEUX</div>
        </h1>
        <nav>
            <!-- for: ${system.nav.links} as ${item},${index} -->
                <a href="${item.url}">${item.title}</a>
            <!-- /for -->
        </nav>
    </header>
    <div class="content center half-width">
        <div class="oneux">ONEUX</div>
        <div class="solog">致力于商业体系的一致性体验</div>
        <div class="buttom">进入规范</div>
    </div>
    <div class="side-nav">
        <!-- for: ${content.pages} as ${page},${index} -->
            <a href="#${page.id}" title="${page.title}">${page.title}</a>
        <!-- /for -->
    </div>
</div>