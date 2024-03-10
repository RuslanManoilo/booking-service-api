/** TAGS
 * @swagger
 * tags:
 *   - name: Camping
 *     description: Camping endpoints
 * 
 *   - name: Order
 *     description: Order endpoints
 */


/** GETALLCAMPINGS
 * @swagger
 * /api/campings:
 *   get:
 *     tags: [Camping]
 *     summary: "Get all campings 🟢"
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/allCampingsResponse'
 *       404:
 *         description: No boards added for the current user
 *         content: {}
 *       401:
 *         description: Unauthorized (invalid access token)
 *         content: {}
 */
/** SCHEMAS for GETALLCAMPINGS:
 * @swagger
 * components:
 *   schemas:
 *     allCampingsResponse:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           example: "001"
 *         name:
 *           type: string
 *           example: "Camping name"
 *         description:
 *           type: string
 *           example: "Some description for this camping"
 *         location:
 *           type: string
 *           example: "Kyiv, UA"
 *         price:
 *           type: number
 *           example: 777
 *         rating:
 *           type: number
 *           example: 4.2
 *         favorite:
 *           type: boolean
 *           example: false
 *         maxPeople:
 *           type: integer
 *           example: 32
 *         status:
 *           type: string
 *           example: "available"
 *         version:
 *           type: integer
 *           example: 0
 */

/** GETCAMPING
 * @swagger
 * /api/campings/{id}:
 *   get:
 *     tags: [Camping]
 *     summary: "Get camping by ID 🟢"
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the camping to get
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/campingResponse'
 *       400:
 *         description: Bad request (invalid ID format)
 *         content: {}
 *       401:
 *         description: Unauthorized (invalid access token)
 *         content: {}
 *       404:
 *         description: Board not found
 *         content: {}
 */
/** SCHEMAS for GETCAMPING:
 * @swagger
 * components:
 *   schemas:
 * 
 *     campingResponse:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           example: "001"
 *         name:
 *           type: string
 *           example: "Camping name"
 *         description:
 *           type: string
 *           example: "Some description for this camping"
 *         location:
 *           type: string
 *           example: "Kyiv, UA"
 *         price:
 *           type: number
 *           example: 777
 *         rating:
 *           type: number
 *           example: 4.2
 *         favorite:
 *           type: boolean
 *           example: false
 *         maxPeople:
 *           type: integer
 *           example: 32
 *         status:
 *           type: string
 *           example: "available"
 *         version:
 *           type: integer
 *           example: 0
 */

/** ADDCAMP
 * @swagger
 * /api/campings/:
 *   post:
 *     tags: [Camping]
 *     summary: "Add a new camping 🟢"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/addCampingScheme'
 *     responses:
 *       201:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/addCampingResponse'
 *       400:
 *         description: Bad request (invalid request body)
 *         content: {}
 *       401:
 *         description: Unauthorized (invalid access token)
 *         content: {}
 */
/** SCHEMAS for ADDCAMP:
 * @swagger
 * components:
 *   schemas:
 *     addCampingScheme:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: "New Camping"
 *         description:
 *           type: string
 *           example: "Description of the new camping"
 *         location:
 *           type: string
 *           example: "Campground Location"
 *         price:
 *           type: number
 *           example: 100
 *       required:
 *         - name
 *         - description
 *         - location
 *         - price
 * 
 *     addCampingResponse:
 *       type: object
 *       properties:
 *         camping:
 *           type: object
 *           properties:
 *             _id:
 *               type: string
 *               example: "123456789"
 *             name:
 *               type: string
 *               example: "New Camping"
 *             description:
 *               type: string
 *               example: "Description of the new camping"
 *             location:
 *               type: string
 *               example: "Campground Location"
 *             price:
 *               type: number
 *               example: 100
 *         message:
 *           type: string
 *           example: "Camping created successfully."
 */

/** EDITCAMP
 * @swagger
 * /api/campings/{id}:
 *   put:
 *     tags: [Camping]
 *     summary: "Edit camping by ID 🟢"
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the camping to edit
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/campingEditRequest'
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/campingResponse'
 *       400:
 *         description: Bad request (invalid ID format or request body)
 *         content: {}
 *       401:
 *         description: Unauthorized (invalid access token)
 *         content: {}
 *       404:
 *         description: Camping not found
 *         content: {}
 */
/** SCHEMAS for EDITCAMP:
 * @swagger
 * components:
 *   schemas:
 * 
 *     campingEditRequest:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: "Updated Camping Name"
 *         description:
 *           type: string
 *           example: "Updated Camping Description"
 *         location:
 *           type: string
 *           example: "Updated Location"
 *         price:
 *           type: number
 *           example: 150
 *         rating:
 *           type: number
 *           example: 4.5
 *         favorite:
 *           type: boolean
 *           example: true
 *         status:
 *           type: string
 *           example: "booked"
 * 
 *     campingResponse:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           example: "123456789"
 *         name:
 *           type: string
 *           example: "Updated Camping Name"
 *         description:
 *           type: string
 *           example: "Updated Camping Description"
 *         location:
 *           type: string
 *           example: "Updated Location"
 *         price:
 *           type: number
 *           example: 150
 *         rating:
 *           type: number
 *           example: 4.5
 *         favorite:
 *           type: boolean
 *           example: true
 *         status:
 *           type: string
 *           example: "booked"
 *         version:
 *           type: number
 *           example: 1
 */

/** DELETECAMP
 * @swagger
 * /api/campings/{id}:
 *   delete:
 *     tags: [Camping]
 *     summary: "Remove camping by ID 🟢"
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the camping to remove
 *     responses:
 *       204:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Camping removed"
 *       400:
 *         description: Bad request (invalid ID format)
 *         content: {}
 *       401:
 *         description: Unauthorized (invalid access token)
 *         content: {}
 *       404:
 *         description: Camping not found
 *         content: {}
 */


/** GETALLORDERS
 * @swagger
 * /api/orders:
 *   get:
 *     tags: [Order]
 *     summary: "Get all orders for the current user 🟢"
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/orderResponse'
 *       400:
 *         description: Bad request (invalid request body)
 *         content: {}
 *       401:
 *         description: Unauthorized (invalid access token)
 *         content: {}
 *       404:
 *         description: No orders added
 *         content: {}
 */
/** SCHEMAS for GETALLORDERS:
 * @swagger
 * components:
 *   schemas:
 * 
 *     allOrdersResponse:
 *       type: array
 *       items:
 *         $ref: '#/components/schemas/orderResponse'
 */

/** GETORDER
 * @swagger
 * /api/orders/{id}:
 *   get:
 *     tags: [Order]
 *     summary: "Get order by ID 🟢"
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the order to get
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/orderResponse'
 *       400:
 *         description: Bad request (invalid ID format)
 *         content: {}
 *       401:
 *         description: Unauthorized (invalid access token)
 *         content: {}
 *       404:
 *         description: Order not found
 *         content: {}
 */
/** SCHEMAS for GETORDER:
 * @swagger
 * components:
 *   schemas:
 * 
 *     orderResponse:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         startDate:
 *           type: string
 *           format: date-time
 *           example: "2024-01-01T12:00:00Z"
 *         endDate:
 *           type: string
 *           format: date-time
 *           example: "2024-01-10T12:00:00Z"
 *         numberOfPeople:
 *           type: integer
 *           example: 5
 *         campingID:
 *           type: integer
 *           example: 13
 */

/** ADDORDER
 * @swagger
 * /api/orders/{campID}:
 *   post:
 *     tags: [Order]
 *     summary: "Add order to a board 🟢"
 *     parameters:
 *       - in: path
 *         name: campID
 *         required: true
 *         description: ID of the camping to add the order to
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/orderCreateScheme'
 *     responses:
 *       201:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/orderResponse'
 *       400:
 *         description: Bad request (invalid camping ID or request body)
 *         content: {}
 *       401:
 *         description: Unauthorized (invalid access token)
 *         content: {}
 *       404:
 *         description: Camping not found
 *         content: {}
 */
/** SCHEMAS for ADDORDER:
 * @swagger
 * components:
 *   schemas:
 * 
 *     orderCreateScheme:
 *       type: object
 *       properties:
 *         startDate:
 *           type: string
 *           format: date
 *           example: "2024-01-01"
 *         endDate:
 *           type: string
 *           format: date
 *           example: "2024-01-10"
 *         numberOfPeople:
 *           type: integer
 *           example: 77
 * 
 *     orderResponse:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 123
 *         startDate:
 *           type: string
 *           format: date
 *           example: "2024-01-01"
 *         endDate:
 *           type: string
 *           format: date
 *           example: "2024-01-10"
 *         numberOfPeople:
 *           type: integer
 *           example: 777
 *         campingID:
 *           type: integer
 *           example: 456
 */

/** EDITORDER
 * @swagger
 * /api/orders/{id}:
 *   put:
 *     tags: [Order]
 *     summary: "Edit order by ID 🟢"
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the order to edit
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/orderUpdateScheme'
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/orderResponse'
 *       400:
 *         description: Bad request (invalid ID format or request body)
 *         content: {}
 *       401:
 *         description: Unauthorized (invalid access token)
 *         content: {}
 *       404:
 *         description: Order not found
 *         content: {}
 */
/** SCHEMAS for EDITORDER:
 * @swagger
 * components:
 *   schemas:
 * 
 *     orderUpdateScheme:
 *       type: object
 *       properties:
 *         startDate:
 *           type: string
 *           format: date
 *           example: "2024-01-01"
 *         endDate:
 *           type: string
 *           format: date
 *           example: "2024-01-10"
 *         numberOfPeople:
 *           type: integer
 *           example: 5
 * 
 *     orderResponse:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 123
 *         startDate:
 *           type: string
 *           format: date
 *           example: "2024-01-01"
 *         endDate:
 *           type: string
 *           format: date
 *           example: "2024-01-10"
 *         numberOfPeople:
 *           type: integer
 *           example: 5
 *         campingID:
 *           type: integer
 *           example: 456
 */

/** DELETEORDER
 * @swagger
 * /api/orders/{id}:
 *   delete:
 *     tags: [Order]
 *     summary: "Delete order by ID 🟢"
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the order to delete
 *     responses:
 *       204:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Order removed"
 *       400:
 *         description: Bad request (invalid ID format)
 *         content: {}
 *       401:
 *         description: Unauthorized (invalid access token)
 *         content: {}
 *       404:
 *         description: Order not found
 *         content: {}
 */
