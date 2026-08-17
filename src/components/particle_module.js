function animation( count = 100, options = {}) {
    const canvas = document.querySelector("canvas")
    const ctx=canvas.getContext("2d");
    const {
        speed = 0.5,
        pointSize = 2,
        connectionDistance = 120,
        mouseDistance = 180,
        lineOpacity = 0.12,
        mouseLineOpacity = 0.6,
        mouseForce = 0.7,
    } = options;

    let width = 0;
    let height = 0;
    let animationId = null;

    const mouse = {
        x: null,
        y: null,
    };

    const points = [];

    // -------------------------
    // Canvas Size
    // -------------------------

    function resize() {
        const rect = canvas.getBoundingClientRect();

        width = rect.width;
        height = rect.height;

        const dpr = window.devicePixelRatio || 1;

        canvas.width = width * dpr;
        canvas.height = height * dpr;

        ctx.setTransform(
            dpr,
            0,
            0,
            dpr,
            0,
            0
        );
    }

    // -------------------------
    // Random
    // -------------------------

    function random(min, max) {
        return Math.random() * (max - min) + min;
    }

    // -------------------------
    // Create Point
    // -------------------------

    function createPoint() {
        return {
            x: random(0, width),
            y: random(0, height),

            vx: random(-1, 1),
            vy: random(-1, 1),

            size: random(
                pointSize * 0.5,
                pointSize
            ),

            opacity: random(0.4, 0.9),
        };
    }

    function createPoints() {
        points.length = 0;

        for (let i = 0; i < count; i++) {
            points.push(createPoint());
        }
    }

    // -------------------------
    // Move
    // -------------------------

    function movePoint(point) {
        point.x += point.vx * speed;
        point.y += point.vy * speed;

        if (point.x <= 0) {
            point.x = 0;
            point.vx *= -1;
        }

        if (point.x >= width) {
            point.x = width;
            point.vx *= -1;
        }

        if (point.y <= 0) {
            point.y = 0;
            point.vy *= -1;
        }

        if (point.y >= height) {
            point.y = height;
            point.vy *= -1;
        }
    }

    // -------------------------
    // Mouse Interaction
    // -------------------------

    function mouseInteraction(point) {
        if (
            mouse.x === null ||
            mouse.y === null
        ) {
            return;
        }

        const dx = point.x - mouse.x;
        const dy = point.y - mouse.y;

        const distance = Math.sqrt(
            dx * dx + dy * dy
        );

        if (
            distance < mouseDistance &&
            distance > 0
        ) {
            const force =
                (mouseDistance - distance) /
                mouseDistance;

            point.x +=
                (dx / distance) *
                force *
                mouseForce;

            point.y +=
                (dy / distance) *
                force *
                mouseForce;
        }
    }

    // -------------------------
    // Draw Point
    // -------------------------

    function drawPoint(point) {
        ctx.beginPath();

        ctx.arc(
            point.x,
            point.y,
            point.size,
            0,
            Math.PI * 2
        );

        ctx.fillStyle = "#ffffff";

        ctx.globalAlpha = point.opacity;

        ctx.fill();

        ctx.globalAlpha = 1;
    }

    // -------------------------
    // Connect Points
    // -------------------------

    function drawConnections() {
        for (let i = 0; i < points.length; i++) {
            const point1 = points[i];

            for (
                let j = i + 1;
                j < points.length;
                j++
            ) {
                const point2 = points[j];

                const dx =
                    point1.x - point2.x;

                const dy =
                    point1.y - point2.y;

                const distance = Math.sqrt(
                    dx * dx + dy * dy
                );

                if (
                    distance <
                    connectionDistance
                ) {
                    const ratio =
                        1 -
                        distance /
                        connectionDistance;

                    const opacity =
                        Math.pow(ratio, 2) *
                        lineOpacity;

                    ctx.beginPath();

                    ctx.moveTo(
                        point1.x,
                        point1.y
                    );

                    ctx.lineTo(
                        point2.x,
                        point2.y
                    );

                    ctx.strokeStyle =
                        "#ffffff";

                    ctx.globalAlpha =
                        opacity;

                    ctx.lineWidth = 1;

                    ctx.stroke();

                    ctx.globalAlpha = 1;
                }
            }
        }
    }

    // -------------------------
    // Connect Mouse
    // -------------------------

    function drawMouseConnections() {
        if (
            mouse.x === null ||
            mouse.y === null
        ) {
            return;
        }

        for (const point of points) {
            const dx =
                point.x - mouse.x;

            const dy =
                point.y - mouse.y;

            const distance = Math.sqrt(
                dx * dx + dy * dy
            );

            if (
                distance <
                mouseDistance
            ) {
                const ratio =
                    1 -
                    distance /
                    mouseDistance;

                const opacity =
                    Math.pow(ratio, 5) *
                    mouseLineOpacity;

                ctx.beginPath();

                ctx.moveTo(
                    point.x,
                    point.y
                );

                ctx.lineTo(
                    mouse.x,
                    mouse.y
                );

                ctx.strokeStyle =
                    "#ffffff";

                ctx.globalAlpha =
                    opacity;

                ctx.lineWidth = 1;

                ctx.stroke();

                ctx.globalAlpha = 1;
            }
        }
    }

    // -------------------------
    // Animation
    // -------------------------

    function animate() {
        ctx.clearRect(
            0,
            0,
            width,
            height
        );

        for (const point of points) {
            movePoint(point);
            mouseInteraction(point);
            drawPoint(point);
        }

        drawConnections();
        drawMouseConnections();

        animationId =
            requestAnimationFrame(
                animate
            );
    }

    // -------------------------
    // Events
    // -------------------------

    function handleMouseMove(event) {
        const rect =
            canvas.getBoundingClientRect();

        mouse.x =
            event.clientX -
            rect.left;

        mouse.y =
            event.clientY -
            rect.top;
    }

    function handleMouseLeave() {
        mouse.x = null;
        mouse.y = null;
    }

    function handleResize() {
        resize();
    }

    // -------------------------
    // Initialize
    // -------------------------

    resize();

    createPoints();

    window.addEventListener(
        "resize",
        handleResize
    );

    canvas.addEventListener(
        "mousemove",
        handleMouseMove
    );

    canvas.addEventListener(
        "mouseleave",
        handleMouseLeave
    );

    animate();

    // -------------------------
    // Cleanup
    // -------------------------

    return function destroy() {
        cancelAnimationFrame(
            animationId
        );

        window.removeEventListener(
            "resize",
            handleResize
        );

        canvas.removeEventListener(
            "mousemove",
            handleMouseMove
        );

        canvas.removeEventListener(
            "mouseleave",
            handleMouseLeave
        );
    };
}

export default animation;