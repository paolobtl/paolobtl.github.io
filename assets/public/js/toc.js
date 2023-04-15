const toc = document.querySelector('.toc');
        if (toc) {
            const headers = document.querySelectorAll('h2, h3, h4, h5, h6');
            if (headers.length > 1) {
                const tocList = document.createElement('ol');
                tocList.classList.add('toc-list');
                tocList.setAttribute('role', 'list')
                toc.appendChild(tocList);

                let prevLevel = 2;
                let tocListCurrent = tocList;
                headers.forEach((header, index) => {
                    if(header.textContent === 'paolo bietolini') return;
                    const currentLevel = parseInt(header.tagName.charAt(1));
                    if (currentLevel > prevLevel) {
                        for (let i = prevLevel; i < currentLevel; i++) {
                            const tocListItem = document.createElement('li');
                            const tocListChild = document.createElement('ol');
                            tocListChild.classList.add('toc-list');
                            tocListChild.setAttribute('role', 'list')
                            tocListItem.appendChild(tocListChild);
                            tocListCurrent.appendChild(tocListItem);
                            tocListCurrent = tocListChild;
                        }
                    } else if (currentLevel < prevLevel) {
                        for (let i = currentLevel; i < prevLevel; i++) {
                            tocListCurrent = tocListCurrent.parentElement.parentElement;
                        }
                    }

                    const tocListItem = document.createElement('li');
                    const tocLink = document.createElement('a');
                    tocLink.textContent = header.textContent;
                    tocLink.href = `#${header.id}`;
                    tocListItem.appendChild(tocLink);
                    tocListCurrent.appendChild(tocListItem);

                    prevLevel = currentLevel;
                });
            }
        }